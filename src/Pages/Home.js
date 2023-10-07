import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import '../index.css';
import Box from '../Components/Box';
import HomeBox from '../Components/HomeBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faEgg } from '@fortawesome/free-solid-svg-icons'
import { faCrow } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Pie from '../Components/Pie';
import Chart from '../Components/Chart';
import Sidebar from '../Components/SideBar';
import Footer from '../Components/Footer';



const Home = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='d-flex'>

        <Sidebar />

        <div className=' w-100'>
          <div className='container'>
            <h1 className='text-center my-3'>Welcome Dashboard</h1>

            <div className='bg-light'>
              {/* HELLO SCRIPT */}
              <div className="col-lg-12 p-3">
                <h4 className="text-primary">
                  Good morning <span className="names">Mr SteveHaha</span>
                </h4>
                <p className="mb-0">Bird Breeding Management | Admin Dashboard </p>
              </div>
              {/* CARD  */}
              <div className='d-flex justify-content-between card-report'>
                <div >
                  <HomeBox title="Nhân viên" number="10">
                    <FontAwesomeIcon icon={faPeopleGroup} size="2x" />
                  </HomeBox>
                </div>
                <div >
                  <HomeBox title="Chim" number="30">
                    <FontAwesomeIcon icon={faCrow} size="2x" />
                  </HomeBox>
                </div>
                <div>
                  <HomeBox title="Trứng" number="14">
                    <FontAwesomeIcon icon={faEgg} size="2x" />
                  </HomeBox>
                </div>
                <div >
                  <HomeBox title="Quá trình" number="5">
                    <FontAwesomeIcon icon={faHourglassHalf} size="2x" />
                  </HomeBox>
                </div>
              </div>

              <div className='row my-5'>{/* Pie and chart */}
                <div className='col-md-6'>{/* Pie */}
                  <h1 className='text-center'>Pie Chart</h1>
                  <Pie />
                </div>

                <div className='col-md-6'>{/* Pie */}
                  <h1 className='text-center'>Chart</h1>
                  <Chart />
                </div>


              </div>

            </div> {/* End of Bg-light */}


          </div>{/* End of Container */}


        </div>
      </div><Footer />


    </div>
  )
}

export default Home