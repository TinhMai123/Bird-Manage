import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import '../index.css';
import Box from '../Components/Box';
import HomeBox from '../Components/HomeBox';




const Home = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <h1 className='text-center'>Welcome home page</h1>
      <div className="col-lg-12 p-md-0 text-center">
        <h4 className="text-primary">
          Good morning <span className="names">Dr Roberts</span>
        </h4>
        <p className="mb-0">Bird Breeding Management | Admin Dashboard </p>
      </div>

      <div className='d-flex'>
        <HomeBox />
        <HomeBox />
      </div>


    </div>
  )
}

export default Home