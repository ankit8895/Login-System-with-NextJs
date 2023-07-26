'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {};
  return (
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
