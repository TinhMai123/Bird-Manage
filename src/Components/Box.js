import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";

const Box = ({ quan, image, title, content }) => {
    return (
        <>
            <div className="card mt-5" style={{ width: '18rem' }}>
                <div className='m-2 text-center'> <h4>Bird Quantity: {quan}</h4> </div>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="#" className="btn btn-primary">View Process</a>
                </div>
            </div>
        </>
    )
}

export default Box