import React, { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from "@apollo/client";
import {Pencil, Trash, Image, PlusLg, ImageFill} from 'react-bootstrap-icons';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';

function UpdateProduct() {
  const [productId, setProductId] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const [stockModal, setStockModal] = useState(false);

  //  Images

  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [productImages, setProductImages] = useState([]);

  const [ allColor, setAllColor] = useState([]);
  const [ allGender, setAllGender] = useState([]);
  const [ allSize, setAllSize] = useState([]);

  //  
  const [quantity, setQuantity] = useState(0);

  const [size, setSize] = useState("");

  const GET_ALL_PRODUCT = gql`
    query GetAllProducts {
      getAllProducts {
        id
        color
        description
        discount
        gender
        gst
        priveiwName
        productName
        sellingPrice
        size
        stock {
          quantity
          gender
          color
          size
        }
        images {
          imagePath
          color
          gender
        }
      }
    }
  `;

  const { data, refetch } = useQuery(GET_ALL_PRODUCT);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {

  }, [data]);

  // ADD_IMAGE
  const ADD_IMAGE = gql`
    mutation AddImagetoProduct($productId: ID, $productImages: [Upload], $color: String, $gender: String) {
      addImagetoProduct(productId: $productId, productImages: $productImages, color: $color, gender: $gender) {
        massage
      }
    }
  `;
  const [addImagetoProduct, {data: dataImage}] = useMutation(ADD_IMAGE, {
    onCompleted: () => {
        toast.success("Images Updated Successfully");
       // setImageModal(false);
      },
      onError: (error) => {
        toast.error("Error Occured");
        console.error("ERROR: ", error.message);
      }
  });

  const handleImages = async (id, color, gender) => {
    setProductId(id);
    setImageModal(true);
    setAllColor(color);
    setAllGender(gender);
 }

  const ConfirmUpdateImage = async () => {
    await addImagetoProduct({
      variables: {
        productId: productId,
        productImages: productImages,
        color: color,
        gender: gender
      }
    });
  }

  // ADD_STOCK
  const ADD_STOCK = gql`
    mutation AddStocktoProduct($productId: ID, $quantity: Int, $gender: String, $color: String, $size: String) {
      addStocktoProduct(productId: $productId, quantity: $quantity, gender: $gender, color: $color, size: $size) {
        massage
      }
    }
  `;

  const [addStocktoProduct, {data: dataStock}] = useMutation(ADD_STOCK, {
    onCompleted: () => {
        toast.success("Stock Updated Successfully");
       // setStockModal(false);
      },
      onError: (error) => {
        toast.error("Error Occured");
        console.error("ERROR: ", error.message);
      }
  });
  const handleStock = async (id, color, gender, size) => {
    setProductId(id);
    setStockModal(true);
    setAllColor(color);
    setAllGender(gender);
    setAllSize(size);
  }

  

  const ConfirmUpdateStock = async () => {
    await addStocktoProduct({
        variables: {
            productId: productId,
            quantity: parseInt(quantity, 10),
            gender: gender,
            color: color,
            size: size
          }
    });
  }

  return (<>
    <h5 className='text-center'>Update Product</h5>
    {data && data.getAllProducts.map((item, index) => 
      <div className='my-4 d-flex' key={item.id}>
        <Col>
        <p className='mx-4'> {index+1}. {item?.productName}</p>
        </Col>
        <Col>
          <Button className="btn btn-sm mx-1 btn-dark" onClick={() => handleImages(item.id, item.color, item.gender)}> Add Image </Button>
          <Button className="btn btn-sm mx-1 btn-dark" onClick={() => handleStock(item.id, item.color, item.gender, item.size )}> Add Stock </Button>
        </Col>
      </div>
    )}

    <Modal style={{width: "100%"}}  show={imageModal} onHide={() => setImageModal(false)}
       scrollable dialogClassName="full" >
    <Modal.Header closeButton>
    <Modal.Title as="h5">Update Product Image</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Label>Color</Form.Label>
      <Form.Select onChange={(e) => setColor(e.target.value)}>
      <option hidden>Select Color</option>
      {allColor &&   allColor?.map((c) => <option value={c}>{c}</option>)} </Form.Select>
      <Form.Label>Gender</Form.Label>
      <Form.Select onChange={(e) => setGender(e.target.value)}>
      <option hidden>Select Gender</option>
      {allGender && allGender?.map((c) => <option value={c}>{c}</option>)} </Form.Select>
      <Form.Label>Images</Form.Label>
      <Form.Control type="file" multiple onChange={(e) => setProductImages(e.target.files)} />
      <Button variant="dark" type="submit" className="mt-2" onClick={() => setImageModal(false)}> Go Back</Button>
      <Button variant="dark" type="submit" className="mt-2 mx-1" onClick={() => ConfirmUpdateImage()}> Save Changes </Button>
      </Modal.Body>
    </Modal>

    <Modal style={{width: "100%"}}  show={stockModal} onHide={() => setStockModal(false)}
       scrollable dialogClassName="full" >
    <Modal.Header closeButton>
      <Modal.Title as="h5">Update Product Stock</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Label>Color</Form.Label>
      <Form.Select onChange={(e) => setColor(e.target.value)}>
      <option hidden>Select Color</option>
      {allColor &&   allColor?.map((c) => <option value={c}>{c}</option>)} </Form.Select>
      <Form.Label>Gender</Form.Label>
      <Form.Select onChange={(e) => setGender(e.target.value)}>
      <option hidden>Select Gender</option>
      {allGender && allGender?.map((c) => <option value={c}>{c}</option>)} </Form.Select>
      <Form.Label>Size</Form.Label>
      <Form.Select onChange={(e) => setSize(e.target.value)}>
      <option hidden>Select Size</option>
      {allSize && allSize?.map((c) => <option value={c}>{c}</option>)} </Form.Select>
      <Form.Label>Quantity</Form.Label>
      <Form.Control type="number" onChange={(e) => setQuantity(e.target.value)} />
      <Button variant="dark" type="submit" className="mt-2" onClick={() => setStockModal(false)}> Go Back</Button>
      <Button variant="dark" type="submit" className="mt-2 mx-1" onClick={() => ConfirmUpdateStock()}> Save Changes </Button>
    </Modal.Body>
    </Modal>
  </>);
}

export default UpdateProduct;