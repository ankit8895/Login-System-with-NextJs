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
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center border border-5'>
      <h3 className='mb-3 fw-bolder'>Profile</h3>
      <h5 className='fw-bolder'>
        {data === '' ? (
          'No user data'
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h5>
      <div className='d-flex flex-wrap justify-content-center align-items-center mt-3'>
        <Button
          variant='primary'
          className='me-1 fw-bolder'
          onClick={getUserDetails}
        >
          GetUser Details
        </Button>

        <Button variant='danger' className='fw-bolder' onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
