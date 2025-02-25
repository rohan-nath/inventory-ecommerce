import React, { useEffect, useState } from 'react';
import { gql, useMutation, useLazyQuery, useQuery } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Row, Col, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Cart } from 'react-bootstrap-icons';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function Checkout(props) {
  const navigate = useNavigate();
  const { state } = useLocation();


  const [ totalAmount, setTotalAmount] = useState(state?.reduce((acc, curr) => acc + curr?.quantity * curr?.price, 0));
  // setTotalAmount(state?.reduce((acc, curr) => acc + curr?.quantity * curr?.price, 0));

  const [ shippingAddress , setShippingAddress] = useState("");
  

  // console.log("state:" , state);
  console.log( "FINAL shippingAddress" , shippingAddress);

  
  
 const [shippingAsBilling, setShippingAsBilling] = useState(false);

  // GET_BILLING_ADDRESS 
  const GET_BILLING_ADDRESS  = gql`
    query GetAllAddressesByUser {
      getAllAddressesByUser {
        id
      }
    }
  `;

  // CREATE ORDER 
  const CREATE_ORDER = gql`
    mutation CreateOrder($paymentMethod: String, $totalAmount: Float, $orderProducts: [OrderProducts], $shippingAddress: ID, $billingAddress: ID, $status: String) {
      createOrder(paymentMethod: $paymentMethod, totalAmount: $totalAmount, orderProducts: $orderProducts, shippingAddress: $shippingAddress, billingAddress: $billingAddress, status: $status) {
        id
        user {
          email
          firstName
          id
          mobileNo
        }
        paymentMethod
        totalAmount
        orderProducts {
          productId {
            id
            productName
            priveiwName
            sellingPrice
          }
          price
          quantity
          packedImage
          shippedImage
          shippedBy
          trackingNo
          trackingUrl
        }
        shippingAddress {
          id
          firstName
          lastName
          mobileNo
          addressLine1
          addressLine2
          city
          state
          postalCode
          country
        }
        billingAddress {
          id
          firstName
          lastName
          mobileNo
          addressLine1
          addressLine2
          city
          state
          postalCode
          country
        }
        status
        paymentStatus
        paymentProof
        paymentId
      }
    }
  `;

  // MAKE PAYMENT
  const MAKE_PAYMENT = gql`
    mutation Mutation($amount: String, $firstname: String, $email: String, $phone: String) {
      makePayment(amount: $amount, firstname: $firstname, email: $email, phone: $phone) {
        success
        message
        redirectUrl
      }
    }
  `;
  
  // CREATE SHIPPING ADDRESS
  const CREATE_SHIPPING_ADDRESS = gql`
    mutation CreateAddress($addressLine1: String!, $city: String!, $state: String!, $postalCode: String!, $country: String!, $firstName: String, $lastName: String, $mobileNo: String, $addressLine2: String) {
      createAddress(addressLine1: $addressLine1, city: $city, state: $state, postalCode: $postalCode, country: $country, firstName: $firstName, lastName: $lastName, mobileNo: $mobileNo, addressLine2: $addressLine2) {
        id
      }
    }
 `;


  // GET CART 
  const CART = gql`
  query Cart {
    cart {
      _id
      cartProducts {
        color
        gender
        size
        quantity
        productId {
          id
          priveiwName
          productName
          sellingPrice
          images {
            imagePath
            color
            gender
          }
        }
      }
    }
  }
`;


  // Mutations and Query
  const {data: cartData} = useQuery(CART);
  const {data: billingAddress} = useQuery(GET_BILLING_ADDRESS);
  const [createOrder, {data: orderData}] = useMutation(CREATE_ORDER, {
    onCompleted: () => {
      toast.success("Order Created Successfully");
    },
    onError : (error) => {
      toast.error("Some Error Occured");
      console.error("ERROR ", error.message);
    }
  });

  const [createPayment, {data: paymentData}] = useMutation( MAKE_PAYMENT, {
    onCompleted: () => {
      toast("Redirecting to payment Gateway");
    },
    onError: (err) => {
      console.error(err.message);
    }
  });

  const [createShippingAddress, {data: shippingData}] = useMutation(CREATE_SHIPPING_ADDRESS, {
    onCompleted : () => {
      toast.success("Address Saved Successfully");
    },
    onError : (error) => {
      toast.error("Error ");
      console.error(error.message);
    }
  });


  // if(orderData){ 
  //   console.log("orderData", orderData);
  // }

  // if(billingAddress){
  //   console.log("billingAddress", billingAddress?.getAllAddressesByUser[0]?.id);
  // }

  // if(paymentData){
  //   console.log("paymentData", paymentData);
  // }

  // if(shippingData){
  //   console.log(shippingData?.createAddress?.id)
  // }

  useEffect(() => {
    if(paymentData?.makePayment?.success){
      navigate(paymentData?.makePayment?.redirectUrl);
    }
  }, [paymentData?.makePayment]);

 
  const handleOrder = async () => {
    if( totalAmount && state &&  shippingAddress &&  billingAddress?.getAllAddressesByUser[0]?.id )
    {
      await createOrder({
        variables: {
          paymentMethod: "ONLINE",
          totalAmount: totalAmount,
          orderProducts: state,
          shippingAddress : shippingAddress,
          // shippingAddress: shippingData?.createAddress?.id,
          billingAddress: billingAddress?.getAllAddressesByUser[0]?.id,
          status: "pending"
        }
      });
    }
    else {
      toast.error("SOME ERROR OCCURRED ");
    }
    
   
    
  }

  useEffect(() => {
    if(orderData?.createOrder?.user  && totalAmount){
      createPayment({
        variables : {
          amount:  String(totalAmount),
          firstname: orderData?.createOrder?.user?.firstName,
          email: orderData?.createOrder?.user?.email,
          phone: orderData?.createOrder?.user?.mobileNo,
        }
      });
      }
  }, [orderData?.createOrder?.user]);

  const goToCart = () => {
    navigate('/cart', {state});
  }


  // Setting Shipping Address ID
  useEffect(() => {
    if(shippingAsBilling){
       console.log("bill", billingAddress?.getAllAddressesByUser[0]?.id);
      setShippingAddress(billingAddress?.getAllAddressesByUser[0]?.id);
    } else {
      console.log("ship", shippingData?.createAddress?.id);
      setShippingAddress(shippingData?.createAddress?.id);
    }
  }, [shippingAsBilling, shippingData?.createAddress?.id, billingAddress?.getAllAddressesByUser[0]?.id,]);


  console.log("shippingAsBilling", shippingAsBilling);
  // /////////////////// CREATE ADDRESS FORM ///////////////////////

  const phoneRegExp = /^(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})$/;
  const pincodeRegExp = /^[0-9]*$/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Enter firstName'),
    lastName: Yup.string().required('Enter lastName'),
    mobileNo: Yup.string().matches(phoneRegExp, 'Mobile No is invalid').required('Enter Mobile No'),
    address: Yup.string().required('Enter Address'),
    address2: Yup.string().required('Enter Landmark'),
    city: Yup.string().required('Enter your City name'),
    pincode: Yup.string().matches(pincodeRegExp, 'Pincode is not valid').required('Enter Pincode'),
    state: Yup.string().required('Enter your State'),
    country: Yup.string().required('Country Name is required'),
  });

  const initialValues = {
    address: '',
    address2: '',
    city: '',
    pincode: '',
    state: '',
    country: 'India',
    firstName: '',
    lastName: '',
    mobileNo: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    await createShippingAddress({
      variables: {
        addressLine1: values.address,
        addressLine2: values.address2,
        postalCode: values.pincode,
        ...values,
      },
    });
    
        // setTimeout(() => {
        //   resetForm({ values: '' });
        // }, 10);
    
  };
    
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (<>
    <div className='my-5 mx-5 d-flex'>
      <h5>THE ASSEMBLE CLOTHING</h5> 
      <Button variant='link' className='d-inline mr-0 pr-0 me-0' style={{marginLeft: "74%"}} onClick={() => goToCart()}>
        <Cart color='black' size={26}/>
      </Button>
    </div>
    <hr className='my-0 py-0'/>

    <Row className='mx-3'>
      <Col className="col-lg-7">
        <div className='mx-3 mt-5'>
        <h5>Shippin Address</h5>
        <Form.Check type='checkbox' className='ms-0 me-3 px-4' onChange={() => setShippingAsBilling(!shippingAsBilling)}/> <p className='px-2 mx-4'> Same as Billing Address</p>
  
        {!shippingAsBilling  && <>
        <h5>
          Add New Shipping Address
        </h5>
        <form id="sellerForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex filled form-group tooltip-end-top">
                      {/* <CsLineIcons icon="home" /> */}
                      <Form.Control
                        type="text"
                        className='col-6 ms-0 me-1'
                        autoComplete="firstName"
                        name="firstName"
                        onChange={handleChange}
                        placeholder="Enter first Name..."
                        value={values.firstName}
                      />
                      {errors.firstName && touched.firstName && <div className="d-block invalid-tooltip">{errors.firstName}</div>}
                   
                      {/* <CsLineIcons icon="home" /> */}
                      <Form.Control
                        type="text"
                        autoComplete="lastName"
                        className='col-6 me-0 ms-0'
                        name="lastName"
                        onChange={handleChange}
                        placeholder="Enter last Name..."
                        value={values.lastName}
                      />
                      {errors.lastName && touched.lastName && <div className="d-block invalid-tooltip">{errors.lastName}</div>}
                    </div>
                    <div className="mb-3 filled form-group tooltip-end-top">
                      {/* <CsLineIcons icon="home" /> */}
                      <Form.Control
                        type="text"
                        autoComplete="mobileNo"
                        name="mobileNo"
                        maxLength={10}
                        onChange={handleChange}
                        placeholder="Enter mobile No..."
                        value={values.mobileNo}
                      />
                      {errors.mobileNo && touched.mobileNo && <div className="d-block invalid-tooltip">{errors.mobileNo}</div>}
                    </div>
                    <div className="mb-3 filled form-group tooltip-end-top">
                      {/* <CsLineIcons icon="home" /> */}
                      <Form.Control
                        type="text"
                        autoComplete="street-address"
                        name="address"
                        onChange={handleChange}
                        placeholder="Enter House No, Colony name..."
                        value={values.address}
                      />
                      {errors.address && touched.address && <div className="d-block invalid-tooltip">{errors.address}</div>}
                    </div>
                    <div className="mb-3 filled form-group tooltip-end-top">
                      {/* <CsLineIcons icon="home" /> */}
                      <Form.Control type="text" name="address2" onChange={handleChange} placeholder="Enter Street No, Area, Landmark" value={values.address2} />
                      {errors.address2 && touched.address2 && <div className="d-block invalid-tooltip">{errors.address2}</div>}
                    </div>
                    <div className="mb-3 d-flex filled form-group tooltip-end-top">
                      {/* <CsLineIcons icon="building-large" /> */}
                      <Form.Control  type="text" className='col-6 ms-0 me-1' name="city" onChange={handleChange} placeholder="Enter City" value={values.city} />
                      {errors.city && touched.city && <div className="d-block invalid-tooltip">{errors.city}</div>}
                   
                      {/* <CsLineIcons icon="bookmark" /> */}
                      <Form.Control className='col-6 me-0 ms-0' type="text" name="pincode" onChange={handleChange} placeholder="Enter Pincode" value={values.pincode} maxLength={6} />
                      {errors.pincode && touched.pincode && <div className="d-block invalid-tooltip">{errors.pincode}</div>}
                    </div>
                    <div className="mb-3 d-flex filled form-group tooltip-end-top">
                      {/* <CsLineIcons icon="plane" /> */}
                      <Form.Select className='col-6 ms-0 me-1' name="state" onChange={handleChange} aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </Form.Select>
                      {/* <Form.Control type="text" name="state" onChange={handleChange} placeholder="Enter State" value={values.state} />
                      {errors.state && touched.state && <div className="d-block invalid-tooltip">{errors.state}</div>} */}
                    
                      {/* <CsLineIcons icon="web" /> */}
                      <Form.Control className='col-6 me-0 ms-0' type="text" name="country" onChange={handleChange} placeholder="Enter Country" value={values.country} />
                      {errors.country && touched.country && <div className="d-block invalid-tooltip">{errors.country}</div>}
                    </div>
                    <div className="text-center">
                      {/* <Button onClick={() => setAddressModal(false)} variant="primary" className="btn-icon me-2">
                        Cancel
                      </Button> */}
                      <Button variant="primary" className="btn-icon btn-icon-start" type="submit">
                        Submit Address
                      </Button>
                    </div>
                  </form>
          {/* <Button onClick={() => handleSubmitAddress()}>Submit Address</Button> */}
           </>}
          
          
        </div>
      <div className='mt-5 mb-5 mx-3'>
    {/* <h3 className='mt-5 mb-5'>Checkout</h3> */}
    <Button style={{backgroundColor: "black", color: "white"}} onClick={() => handleOrder()}>Pay Now</Button>
    </div>
      </Col>




    <Col className="col-lg-5 my-0 py-0" style={{backgroundColor: "#fafafa"}}>
      {/* Cart Summary  */}
      <div className='mt-5'></div>
    {cartData?.cart?.cartProducts?.length > 0 && cartData?.cart?.cartProducts?.map((item) => 
    <div key={item?.productId?.id} className='mb-1 mx-1 px-0 mt-1'> 
      <Row className='my-2'>
        <Col className='col-3 mx-1'>
          <img 
          style={{height: "100px", width:"70px", border: "2px solid black"}} 
          className='ms-3' 
          src={item?.productId?.images[0]?.imagePath[0] } 
          alt="s"/>
        </Col>
        <Col className='col-5 mx-2'>
          <p className='fs-6'>{item?.productId?.productName}</p>
          <p className='fs-6'>{item?.size}</p>
          <p className='fs-6'>{item?.color}</p> </Col>
        <Col className='col-2'> 
          {/* <Row> */}
         
          <p className='fw-bold'>₹ {item?.quantity * item?.productId?.sellingPrice} </p>
          
          {/* </Row> */}
        </Col>
      </Row>
    </div>)}
    <hr/>
    <div className='my-2'>
      <p className='fw-bold d-inline fs-5 ms-3' style={{marginRight: "40px", paddingRight: "50px"}}>SUBTOTAL </p>
      <p className='fw-bold d-inline fs-5' style={{ marginLeft: "140px", alignItems: "end", alignContent: "end"}}>
         ₹ {totalAmount}
      </p>
    </div>
    </Col>
  </Row>

   
  </>);
}

export default Checkout;