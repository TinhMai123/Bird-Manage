import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
const HomeBox = (props, color) => {
    return (
        <div className="text-center bg-success text-white p-3 rounded d-flex align-items-center mt-5">
            <div className=''>
                {props.children}
            </div>
            <div className='text-center w-100'>
                <h5 className="mt-2">{props.title}</h5>
                <h1>{props.number}</h1>
            </div>
        </div>

    )
}

export default HomeBox