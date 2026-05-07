import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Logout from './Pages/Logout'
import Pannel from './Layouts/Pannel'
import Dashboard from './Pages/Dashboard'
import Car from './Component/Car'
import ParkSlot from './Component/ParkSlot'
import ParkRec from './Component/ParkRec'
import Payment from './Component/Payment'
import Report from './Component/Report'
import Setting from './Component/Setting'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/' element={<Pannel/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/car' element={<Car/>}/>
      <Route path='/slots' element={<ParkSlot/>}/>
      <Route path='/parking' element={<ParkRec/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/setting' element={<Setting/>}/>
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App