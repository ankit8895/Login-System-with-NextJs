'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState('');
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      router.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    setData(res.data.data._id);
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-3'>Profile</h1>
      <p>Profile Page</p>
      <h2>
        {data === '' ? (
          'No user data'
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <Button variant='danger' className='mt-3' onClick={logout}>
        Logout
      </Button>

      <Button variant='success' className='mt-3' onClick={getUserDetails}>
        GetUser Details
      </Button>
    </div>
  );
}
