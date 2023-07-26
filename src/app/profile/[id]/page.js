export default function UserProfile({ params }) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-3'>Profile</h1>
      <p className='fs-1'>
        Profile Page{' '}
        <span className='text-bg-warning text-light p-1 rounded'>
          {params.id}
        </span>
      </p>
    </div>
  );
}
