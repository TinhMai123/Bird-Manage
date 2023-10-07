import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2023 Company, Inc</p>
                <a
                    href="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/376385728_815563143583844_2473185658508874788_n.png?stp=dst-png_p403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=0x35yDeMoGQAX9Z-CZ-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTKOAj4K6AEj7_wf_wpUgc6nQfZIPyUJYSD83DNWdffVA&oe=6527EDE3"
                        alt="logo" width="50" height="60" />
                    <p pt-5>Chích Chòe Farm</p>
                </a>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Features
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Pricing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            FAQs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            About
                        </a>
                    </li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer