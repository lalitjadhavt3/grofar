// components/Breadcrumb.js
import React from 'react'

function Breadcrumb() {
 return (
  <nav aria-label='breadcrumb' className='breadcrumb mb-0'>
   <div className='container'>
    <ol className='d-flex align-items-center mb-0 p-0'>
     <li className='breadcrumb-item'>
      <a href='#' className='text-success'>
       Home
      </a>
     </li>
     <li className='breadcrumb-item active' aria-current='page'>
      My account
     </li>
    </ol>
   </div>
  </nav>
 )
}

export default Breadcrumb
