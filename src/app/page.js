'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h3 className='fw-bolder mb-3'>Hi!!! There</h3>
        <Link href={'/profile'}>
          <Button variant='primary' className='fw-bolder'>
            Go to Profile Page
          </Button>
        </Link>
      </div>
    </main>
  );
}
