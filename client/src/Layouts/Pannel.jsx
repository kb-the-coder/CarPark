import React from 'react'
import { Outlet } from 'react-router-dom'

const Pannel = () => {
  return (
    <div>
      Pannel 
      <div className="">
        <Outlet/>
      </div>
    </div>
  )
}

export default Pannel