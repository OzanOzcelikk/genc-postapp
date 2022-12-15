import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Main from '../pages/Main'
import NewPost from '../pages/NewPost'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdatePost from '../pages/UpdatePost'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/update-blog/:id" element={<UpdatePost />} />
          <Route path="/detail/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default AppRouter