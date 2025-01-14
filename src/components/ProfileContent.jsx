// components/ProfileContent.js
import React from 'react'

function ProfileContent() {
 return (
  <div className='col-lg-8 p-4 bg-white rounded shadow-sm'>
   <h4 className='mb-4 profile-title'>My account</h4>
   <div id='edit_profile'>
    <div className='p-0'>
     <form action='https://askbootstrap.com/preview/grofarweb/my_account.html'>
      <div className='form-group'>
       <label for='exampleInputName1'>Full Name</label>
       <input type='text' className='form-control' id='exampleInputName1' value='Askbootstrap' />
      </div>
      <div className='form-group'>
       <label for='exampleInputNumber1'>Mobile Number</label>
       <input type='number' className='form-control' id='exampleInputNumber1' value='1234567890' />
      </div>
      <div className='form-group'>
       <label for='exampleInputEmail1'>Email</label>
       <input
        type='email'
        className='form-control'
        id='exampleInputEmail1'
        value='iamosahan@gmail.com'
       />
      </div>
      <div className='text-center'>
       <button type='submit' className='btn btn-success btn-block btn-lg'>
        Save Changes
       </button>
      </div>
     </form>
    </div>
    <div className='additional mt-3'>
     <div className='change_password mb-1'>
      <a href='change_password.html' className='p-3 btn-light border btn d-flex align-items-center'>
       Change Password <i className='icofont-rounded-right ml-auto'></i>
      </a>
     </div>
     <div className='deactivate_account'>
      <a
       href='deactivate_account.html'
       className='p-3 btn-light border btn d-flex align-items-center'
      >
       Deactivate Account <i className='icofont-rounded-right ml-auto'></i>
      </a>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ProfileContent
