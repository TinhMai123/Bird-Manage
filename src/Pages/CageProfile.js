import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import '../index.css';

import Sidebar from '../Components/SideBar';
import Footer from '../Components/Footer';
import BirdProfileCard from '../Components/BirdProfileCard';
import BabyBirdCard from '../Components/BabyBirdCard';


const CageProfile = () => {
    return (
        <div className='app-container'>
            <Navbar />
            <div className='d-flex'>

                <Sidebar />

                <div className=' w-100 h-100'>
                    <div className='container'>
                        <h1 className='text-center my-3'>Welcome Cage Profile</h1>

                        <div className='bg-light'>
                            {/* HELLO SCRIPT */}
                            <div className="col-lg-12 p-3">
                                <h4 className="text-primary">
                                    Good morning <span className="names">Mr SteveHaha</span>
                                </h4>
                                <p className="mb-0">Bird Breeding Management | Admin Dashboard </p>
                            </div>
                            {/* Contain here  */}
                            <h2 className='text-center'>Chích chòe bố mẹ</h2>
                            <div className='d-flex  justify-content-around row bg-light my-3'>
                                <BirdProfileCard ima="https://image.lexica.art/full_jpg/82f9ba07-c275-45ee-b34d-605e5b791fd7" title="Chim" des="None" sex="male" type="Lửa" id="C1" />
                                <BirdProfileCard ima="https://image.lexica.art/full_jpg/82f9ba07-c275-45ee-b34d-605e5b791fd7" title="Chim" des="None" sex="male" type="Lửa" id="C1" />
                            </div>
                        </div> {/* End of Bg-light */}

                        <h2 className='text-center mt-5'>Chích chòe non</h2>
                        <div className='bg-light'>
                            <BabyBirdCard />
                        </div> {/* End of Bg-light */}
                        <h2 className='text-center mt-5'>Thông số hiện tại</h2>
                        <div className='bg-light'>
                            <h5>
                                Tổng số trứng : 10 <br />
                                Số trứng đã nở : 5 <br />
                                Chưa nở / thất bại : 5 <br />
                                Số lượng trong lồng : 7 <br />
                            </h5>

                            
                        </div> {/* End of Bg-light */}

                    </div>{/* End of Container */}


                </div>
            </div><Footer />


        </div>
    )
}

export default CageProfile