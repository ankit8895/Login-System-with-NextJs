'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      await axios.post('/api/users/login', user);
      router.push('/profile');
    } catch (error) {
      console.log('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };
  return loading ? (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1>Processing...</h1>
    </div>
  ) : (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-3'>Login</h1>
      <Form className='mb-3'>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={user.email}
            placeholder='Enter email'
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={user.password}
            placeholder='Enter password'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Button
          className='me-1'
          variant='primary'
          type='submit'
          onClick={onLogin}
          disabled={buttonDisabled}
        >
          Signup here!
        </Button>
        <Link href='/signup'>
          <Button type='button' variant='outline-dark'>
            Visit Signup Page
          </Button>
        </Link>
      </Form>
    </div>
  );
}
