import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import Box from '../Components/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const BreedingManagement = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-center my-3'>Breeding Management</h1>
            <div className='text-center'><button type="button" className="btn btn-warning"><FontAwesomeIcon icon={faPlus} /> ADD CAGE</button></div>


            <div className='d-flex justify-content-around row bg-light my-3'>
                <Box quan={3} image="https://image.lexica.art/md2/7b72e3a1-ab28-460b-8de5-ca024ab7a10d" title="Pairing phase" content="ID: C001" button="View Cage" />
                <Box quan={3} image="https://image.lexica.art/md2/17f931c3-792d-4a18-bbe7-fd7f4e1883a0" title="Egg incubation period" content="ID: C001" button="View Cage" />
                <Box quan={3} image="https://image.lexica.art/full_jpg/033c887e-6f51-4ea6-ad76-6114ea0ce916" title="Young bird stage" content="ID: C001" button="View Cage" />
                <Box quan={3} image="https://image.lexica.art/full_jpg/0ae15633-d56c-4397-a3e4-36728e2eeea4" title="Branch transfer stage" content="ID: C001" button="View Cage" />
                <Box quan={3} image="https://image.lexica.art/full_jpg/82f9ba07-c275-45ee-b34d-605e5b791fd7" title="Mature stage" content="ID: C001" button="View Cage" />
            </div>

        </>

    )
}

export default BreedingManagement