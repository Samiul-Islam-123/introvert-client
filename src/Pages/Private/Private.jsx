import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Search from './Search/Search'
import Explore from './Explore/Explore'
import Reels from "./Reels/Reels"
import Message from "./Message/Message"
import Notification from "./Notifications/Notifications"
import Create from "./Create/Create"
import Profile from "./Profile/Profile"
import { Container, IconButton } from '@mui/material'

function Private() {
  return (
    <>
      <Container>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/search' element={<Search />}></Route>
        <Route exact path='/explore' element={<Explore />}></Route>
        <Route exact path='/reels' element={<Reels />}></Route>
        <Route exact path='/messages' element={<Message />}></Route>
        <Route exact path='/notification' element={<Notification />}></Route>
        <Route exact path='/create' element={<Create />}></Route>
        <Route exact path='/profile' element={<Profile />}></Route>
        
      </Routes>
      </Container>

    </>
  )
}

export default Private