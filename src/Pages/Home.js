import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import '../index.css';
import { Container } from 'react-bootstrap';
import BirdTable from './BirdTable';


const Home = () => {
  return (
    <div className='app-container'>
      <BirdTable/>   
    </div>
  )
}

export default Home