import React from 'react'

function ProfileSidebar() {
 return (
  <div className='col-lg-4'>
   <div className='osahan-account bg-white rounded shadow-sm overflow-hidden'>
    <div className='p-4 profile text-center border-bottom'>
     <img src='img/user.png' className='img-fluid rounded-pill' alt='User' />
     <h6 className='font-weight-bold m-0 mt-2'>Askbootstrap</h6>
     <p className='small text-muted m-0'>
      <a href='mailto:iamosahan@gmail.com'>iamosahan@gmail.com</a>
     </p>
    </div>
    <div className='account-sections'>
     <ul className='list-group'>
      <a href='my_account.html' className='text-decoration-none text-dark'>
       <li className='border-bottom bg-white d-flex align-items-center p-3'>
        <i className='icofont-user osahan-icofont bg-danger'></i>My Account
        <span className='badge badge-success p-1 badge-pill ml-auto'>
         <i className='icofont-simple-right'></i>
        </span>
       </li>
      </a>
      <a href='promos.html' className='text-decoration-none text-dark'>
       <li className='border-bottom bg-white d-flex align-items-center p-3'>
        <i className='icofont-sale-discount osahan-icofont bg-success'></i>Promos
        <span className='badge badge-success p-1 badge-pill ml-auto'>
         <i className='icofont-simple-right'></i>
        </span>
       </li>
      </a>
      <a href='my_address.html' className='text-decoration-none text-dark'>
       <li className='border-bottom bg-white d-flex align-items-center p-3'>
        <i className='icofont-address-book osahan-icofont bg-dark'></i>My Address
        <span className='badge badge-success p-1 badge-pill ml-auto'>
         <i className='icofont-simple-right'></i>
        </span>
       </li>
      </a>
      <a href='terms_conditions.html' className='text-decoration-none text-dark'>
       <li className='border-bottom bg-white d-flex align-items-center p-3'>
        <i className='icofont-info-circle osahan-icofont bg-primary'></i>Terms, Privacy & Policy
        <span className='badge badge-success p-1 badge-pill ml-auto'>
         <i className='icofont-simple-right'></i>
        </span>
       </li>
      </a>
      <a href='help_support.html' className='text-decoration-none text-dark'>
       <li className='border-bottom bg-white d-flex align-items-center p-3'>
        <i className='icofont-phone osahan-icofont bg-warning'></i>Help & Support
        <span className='badge badge-success p-1 badge-pill ml-auto'>
         <i className='icofont-simple-right'></i>
        </span>
       </li>
      </a>
      <a href='help_ticket.html' className='text-decoration-none text-dark'>
       <li className='border-bottom bg-white d-flex align-items-center p-3'>
        <i className='icofont-phone osahan-icofont bg-success'></i>Ticket
        <span className='badge badge-success p-1 badge-pill ml-auto'>
         <i className='icofont-simple-right'></i>
        </span>
       </li>
      </a>
      <a href='signin.html' className='text-decoration-none text-dark'>
       <li className='border-bottom bg-white d-flex align-items-center p-3'>
        <i className='icofont-lock osahan-icofont bg-danger'></i> Logout
       </li>
      </a>
     </ul>
    </div>
   </div>
  </div>
 )
}

export default ProfileSidebar
