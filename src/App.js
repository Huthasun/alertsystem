import React from 'react'
import { MantineProvider } from '@mantine/core';
import Testing from './Components/Testing';

const App = () => {
  return (
    <div className='App'>
      <MantineProvider>
<Testing/>
      </MantineProvider>
      
    </div>
  )
}

export default App
