export default function UserProfile({ params }) {
  return (
    <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center border border-5'>
      <h3 className='mb-3 fw-bolder'>Profile</h3>
      <p className='fs-3 fw-bolder'>
        Profile Page{' '}
        <span className='fs-3 text-bg-warning text-light p-1 rounded fw-bolder'>
          {params.id}
        </span>
      </p>
    </div>
  );
}
