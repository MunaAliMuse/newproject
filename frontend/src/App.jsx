import React from 'react'
import Aboutus from './pages/Aboutus'
import Header from './componants/Header'
import OrderOne from './pages/OrderOne'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from './pages/Login'
import Courcess from './pages/Courcess'
import Contact from './pages/Contact'
import OrderTwo from './pages/OrderTwo'
import OrderTree from './pages/OrderTree'
import Html from './pages/Html'
import Dashboard from './pages/Dashboard'
import MyOders from './pages/MyOrders'
import MyAccount from './pages/MyAccount'
import Java from './pages/java'
import Footer from './componants/Footer'
import EnrollNow from './pages/EnrollNow'
import Videoss from './pages/Video'
function App() {
  return (
    <>
    <Header/>
    <Routes >

      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/About' element={<Aboutus/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Courcess' element={<Courcess/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/OrderOne' element={<OrderOne/>}/>
      <Route path='/OrderTwo' element={< OrderTwo/>}/>
      <Route path='/OrderTree' element={< OrderTree/>}/>
      <Route path='/Html' element={< Html/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/MyOders' element={<MyOders/>}/>
      <Route path='/MyAccount'element={<MyAccount/>}/>
      <Route path='/Java'element={<Java/>}/>
      <Route path='/EnrollNow'element={<EnrollNow/>}/>
      <Route path='/Videoss'element={<Videoss/>}/>



    </Routes>
    <Footer/>
    </>

  )
}

export  default App