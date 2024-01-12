'use client';


import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import Link from 'next/link';
import Navigation from '../navigation/page';

function App() {
  return (
    <>
      <Navigation />
      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className=' my-3 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-3 px-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase text-primary">Login</h2>
                {/* <p className="text-white-50 mb-5">Please enter your login and password!</p> */}

                <MDBInput wrapperClass='mb-4 mx-5 w-100'  label='Email address' id='formControlLg' type='email' size="lg" />
                <MDBInput wrapperClass='mb-4 mx-5 w-100'  label='Password' id='formControlLg' type='password' size="lg" />

                <p className="small mb-3 pb-lg-2"><a href="#!">Forgot password?</a></p>
                <Link href={"/home"}>
                  <MDBBtn outline className='mx-2 px-5' color='success' size='lg'>
                    Login
                  </MDBBtn>
                </Link>



                <div>
                  <p className="my-3">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>

                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>

    </>

  );
}

export default App;