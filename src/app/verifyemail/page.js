'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function VerifyEmailPage() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post('/api/users/verifyemail', { token });
      setVerified(true);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken || '');
  });

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center border border-5'>
      <h3 className='fs-3 fw-bolder'>Verify Email</h3>
      <h3 className='fw-bolder'>{token ? `${token}` : 'no token'}</h3>

      {verified && (
        <div>
          <h3 className='fw-bolder'>Email Verified</h3>
          <Link href='/login'>Login</Link>
        </div>
      )}

      {error && (
        <div>
          <h3 className='fw-bolder'>Error</h3>
        </div>
      )}
    </div>
  );
}
