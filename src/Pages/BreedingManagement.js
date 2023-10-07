import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import Box from '../Components/Box';
import Sidebar from '../Components/SideBar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const BreedingManagement = () => {
    return (
        <>
            <div className='app-container'>
                <Navbar />
                <div className='d-flex'>

                    <Sidebar />

                    <div className=' w-100'>
                        <div className='container'>


                            <div className='bg-light'>
                                {/* HELLO SCRIPT */}
                                <div className="col-lg-12 p-3">
                                    <h4 className="text-primary">
                                        Good morning <span className="names">Mr SteveHaha</span>
                                    </h4>
                                    <p className="mb-0">Bird Breeding Management | Admin Dashboard </p>
                                </div>                            </div> {/* End of Bg-light */}
                            <h1 className='my-3 ps-3'>Sơ Đồ lồng</h1>
                            {/* Contain here  */}
                            {/* <h1 className='text-center my-3'>Breeding Management</h1> */}
                            <div className='text-center'><button type="button" className="btn btn-warning"><FontAwesomeIcon icon={faPlus} /> ADD CAGE</button></div>

                            <div className='d-flex justify-content-around row my-3'>
                                <Box quan={3} image="https://image.lexica.art/md2/7b72e3a1-ab28-460b-8de5-ca024ab7a10d" title="Pairing phase" content="C001" />
                                <Box quan={4} image="https://image.lexica.art/md2/17f931c3-792d-4a18-bbe7-fd7f4e1883a0" title="Egg incubation period" content="C002" />
                                <Box quan={3} image="https://image.lexica.art/full_jpg/033c887e-6f51-4ea6-ad76-6114ea0ce916" title="Young bird stage" content="C003" />
                                <Box quan={4} image="https://image.lexica.art/full_jpg/0ae15633-d56c-4397-a3e4-36728e2eeea4" title="Branch transfer stage" content="C004" />
                                <Box quan={3} image="https://image.lexica.art/full_jpg/82f9ba07-c275-45ee-b34d-605e5b791fd7" title="Mature stage" content="C005" />
                                <Box quan={3} image="https://i.vimeocdn.com/portrait/1274237_640x640" title="Empty" content="C006" />

                            </div>
                            <Footer />

                        </div>{/* End of Container */}
                    </div>
                </div>


            </div>
        </>

    )
}

export default BreedingManagement