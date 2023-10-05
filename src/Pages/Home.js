import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import '../index.css';
import Box from '../Components/Box';




const Home = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <h1 className='text-center'>Welcome home page</h1>
      <div className='d-flex justify-content-around'>
        <Box image="https://i.pinimg.com/236x/d3/7c/c2/d37cc2c5ee1d26b91a1f385f0df80807.jpg" title="This is my wife" content="Content ne" />
        <Box image="https://i.pinimg.com/236x/d3/7c/c2/d37cc2c5ee1d26b91a1f385f0df80807.jpg" title="This is my wife" content="Content ne" />
        <Box image="https://i.pinimg.com/236x/d3/7c/c2/d37cc2c5ee1d26b91a1f385f0df80807.jpg" title="This is my wife" content="Content ne" />
        <Box image="https://i.pinimg.com/236x/d3/7c/c2/d37cc2c5ee1d26b91a1f385f0df80807.jpg" title="This is my wife" content="Content ne" />
        <Box image="https://i.pinimg.com/236x/d3/7c/c2/d37cc2c5ee1d26b91a1f385f0df80807.jpg" title="This is my wife" content="Content ne" />
      </div>

    </div>
  )
}

export default Home