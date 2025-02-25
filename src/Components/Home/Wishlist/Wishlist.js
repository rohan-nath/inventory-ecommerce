import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Row, Col, Button } from 'react-bootstrap';
import { Cart, Heart, Trash } from 'react-bootstrap-icons';
import toast from 'react-hot-toast';

function Wishlist() {  

  const GET_WISHLIST_ITEMS = gql`
    query Wishlist {
        wishlist {
          userId
          wishlistProducts {
            productId {
              id
              productName
              priveiwName
              sellingPrice
              images
              size
              color
              gender
              discount
              gst
              description
              stock
            }
          }
        }
      }
  `;

  const {data} = useQuery(GET_WISHLIST_ITEMS);
  if(data){
    console.log("data", data);
  }


  // ADD TO CART FROM WISHLIST
  
  const ADD_TO_CART = gql`
    mutation AddToCart($productId: ID!, $quantity: Int!) {
      addToCart(productId: $productId, quantity: $quantity) {
        _id
      }
    }
  `;
  
  const [addToCart, {data: cartData}] = useMutation(ADD_TO_CART, {
    onCompleted : () => {
      toast.success("Product Added Successfully in cart");
    },
    onError : (error) => {
      toast.error("Error Occured");
      console.error("ERROR: ", error.message)
    }
  });
  
  const handleAddToCart = async (id) => {
    console.log("Add to Cart");
    await addToCart({
      variables: {  
        productId: id,
        quantity: 1
      }
    });
  }

  // REMOVE FROM WISHLIST
  const REMOVE_FROM_WISHLIST = gql`
    mutation RemoveFromWishlist($productId: ID) {
      removeFromWishlist(productId: $productId) {
        id
        userId
        wishlistProducts {
          productId {
            id
          }
        }
      }
    }
  `;

  const [removeWishlist, {data: removeData}] = useMutation(REMOVE_FROM_WISHLIST, {
    onCompleted : () => {
      toast.success("Removed from Wishlist");
    }, 
    onError : (error) => {
      toast.error("Some Error Occured");
      console.log("ERROR ", error.message);
    }
  });

  const handleRemoveFromWishlist = (id) => {
    removeWishlist({
      variables : {
        productId: id
      }
    });
  }


  return (<>
    <h4 style={{marginTop: "10%"}} className='text-center mb-5'>Wishlist Item</h4>

      {data && data?.wishlist?.wishlistProducts?.map((wish) => 
      <div key={wish?.productId?.id} className='mb-1 mx-1 px-0 mt-1'>
        <Row className='my-2'>
          <Col className='col-2' />
          <Col className='col-3'><img style={{height: "100px", width:"70px", border: "2px solid black"}} src={wish?.productId?.images } alt="s"/></Col>
          <Col className='col-4'> <p className='fs-6'>{wish?.productId?.productName}</p>
            <Row>
              <Col className='fw-bold'>₹ {wish?.productId?.sellingPrice}</Col>
            </Row>
          </Col>
          <Col className='col-3'>
          <Button className="btn btn-sm mx-1" style={{backgroundColor: "black", border: "1px solid black"}}
            onClick = {() => handleAddToCart(wish?.productId?.id)} >
            <Cart size={20} color="white"/>
          </Button>
          <Button className="btn btn-sm mx-1" style={{backgroundColor: "black", border: "1px solid black"}}
            onClick={() => handleRemoveFromWishlist(wish?.productId?.id)} >
            <Trash size={20} color="white" />
          </Button>
          </Col>
        </Row>
      </div>)}
  </>)
}

export default Wishlist;