import React from 'react'

const MealBox = ({ image, title, content, button }) => {
    return (
        <div className="card mt-5" style={{ width: '18rem' }}>

            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className="btn btn-primary">{button}</a>
            </div>
        </div>
    )
}

export default MealBox