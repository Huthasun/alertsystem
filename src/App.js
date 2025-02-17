import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Testing from './Components/Testing';

const App = () => {
  return (
    <div className='App'>
      <MantineProvider>
{/* <Testing/> */}
<Router>
  <Routes>
    <Route path="/" Component={Testing} />
  </Routes>
</Router>
      </MantineProvider>
      
    </div>
  )
}

export default App
