'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function ResetPassword() {
  const [userEmail, setUserEmail] = useState('');

  const resetUserPassword = async () => {
    await axios.post('/api/');
  };

  return (
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center border border-5'>
      <Form onSubmit={resetUserPassword}>
        <Form.Group>
          <Form.Label className='fw-bolder'>
            Enter your registered email id
          </Form.Label>
          <Form.Control
            type='email'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className='fw-bolder'
          />
          <Button variant='primary' className='fw-bolder mt-3'>
            Reset Password
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
