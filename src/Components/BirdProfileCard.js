import React from 'react'

const BirdProfileCard = ({ ima, title, des, sex, type, id }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={ima} className="card-img-top" alt="Loading..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {des}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{sex}</li>
                <li className="list-group-item">{type}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">
                    {id}
                </a>
            </div>
        </div>
    )
}

export default BirdProfileCard