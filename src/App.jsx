
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Carts from './Components/Carts/Carts'

import { useState } from 'react'






function App() {
  const [carts, setCarts] = useState([]);
  
  const [runCredit, setRunCredit ] = useState(0)

  const handleAddToCart = blog => 
  {
    const newCarts = [...carts, blog];
    setCarts(newCarts);
  }

  const handleRunCredit = time => {
    console.log('remaining credit,time');
    setRunCredit(time);

  };
  
    
    


    
  
  

  return ( 
    <> 
    <div className='flex flex-row '>
    <Header></Header></div>
    <div className=' flex flex-row gap-2'>
    
      
    <Blogs handleAddToCart={handleAddToCart} handleRunCredit={handleRunCredit}></Blogs>
    <Carts 
    carts={carts}
    runCredit={runCredit}
    
    ></Carts>
    
    </div>
    
    </>
 
    
  );
}

export default App


