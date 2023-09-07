'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      await axios.post('/api/users/signup', user);
      router.push('/login');
    } catch (error) {
      console.log('Signup failed', error.message);
    } finally {
      setLoading(false);
    }
  };
  return loading ? (
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center border border-5'>
      <h3 className='fw-bolder'>Processing...</h3>
    </div>
  ) : (
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center border border-5'>
      <h3 className='mb-3 fw-bolder'>Signup</h3>
      <Form className='mb-3'>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label className='fw-bolder'>Username</Form.Label>
          <Form.Control
            type='text'
            value={user.username}
            placeholder='Enter Username'
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className='fw-bolder'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label className='fw-bolder'>Email</Form.Label>
          <Form.Control
            type='email'
            value={user.email}
            placeholder='Enter email'
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className='fw-bolder'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label className='fw-bolder'>Password</Form.Label>
          <Form.Control
            type='password'
            value={user.password}
            placeholder='Enter password'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className='fw-bolder'
          />
        </Form.Group>
        <Button
          className='me-1 fw-bolder'
          variant='primary'
          type='submit'
          onClick={onSignup}
          disabled={buttonDisabled}
        >
          Signup here!
        </Button>
        <Link href='/login'>
          <Button type='button' variant='outline-dark' className='fw-bolder'>
            Visit Login Page
          </Button>
        </Link>
      </Form>
    </div>
  );
}
