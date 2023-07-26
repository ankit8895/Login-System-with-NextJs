'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      router.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-3'>Profile</h1>
      <p>Profile Page</p>
      <Button variant='danger' className='mt-3' onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
