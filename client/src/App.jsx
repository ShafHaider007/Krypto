import React, { useState } from 'react'
import {Navbar, Welcome, Footer, Services, Transactions, Loader} from './components'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen'>
      <div className='gradien-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
    </>
  );
}

export default App
