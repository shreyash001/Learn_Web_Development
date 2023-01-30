import React from 'react'
import { useLocation } from 'react-router-dom'


import LeftSideBar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
import '../../App.css'

const Users = () => {
  const location = useLocation()

  return (
    <div className='home-container-1'>
      <LeftSideBar></LeftSideBar>
      <div className='home-container-3'>
        {
          location.pathname === '/Users'?
          <UsersList></UsersList>:
          <></>
        }
      </div>
    </div>
  )
}

export default Users
