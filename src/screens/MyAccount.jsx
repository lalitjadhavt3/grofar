// components/AccountSection.js
import React from 'react'
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileContent from '../components/ProfileContent'

function AccountSection() {
 return (
  <section className='py-4 osahan-main-body'>
   <div className='container'>
    <div className='row'>
     <ProfileSidebar />
     <ProfileContent />
    </div>
   </div>
  </section>
 )
}

export default AccountSection
