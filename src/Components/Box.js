import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";

const Box = ({ quan, image, title, content }) => {
    return (
        <>
            <div className="card mt-5 border-3 border border-dark" style={{ width: '18rem', height: '30rem' }}>
                <div className='m-2 text-center'> <h4>Bird Quantity: {quan}</h4> </div>
                <img className="card-img-top" src={image} alt="Card image cap" style={{ width: '260px', height: '250px' }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <div class="alert alert-success" role="alert">
                        Alert—check it out!
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box