import { gql, useMutation } from '@apollo/client';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';

function ResetPassword() {
const [ passWord, setPassWord] = useState("");


    const RESET_PASSWORD = gql`
    mutation ResetPassword($token: String!, $newPassword: String!) {
        resetPassword(token: $token, newPassword: $newPassword)
      }
      `;


      const [ reset, {data}] = useMutation(RESET_PASSWORD, {
        onCompleted: () => {
            toast.success("Password Set Successfully")
        }, 
        onError: (error) => {
toast.error("Some Error Occured");
console.log(error.message);
        }
      });

      
   const handleMail = async () => {
    await reset({
        variables: { 
        token: "null",
        newPassword: passWord
      }
    })
    
   }

  return (<>
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow" style={{border: "none"}}>
              <Card.Body className='mx-3'>
                <h3>Reset Password</h3>
                <Form.Control type='password' onChange={(e) => setPassWord(e.target.value)} placeholder='Enter New Password' />
                <Button onClick={() =>  handleMail()} className='mt-4 mb-4'>Submit</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
</>)
}

export default ResetPassword;