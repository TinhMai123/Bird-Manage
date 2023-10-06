import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
const HomeBox = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="text-center bg-danger text-white p-3 rounded d-flex">
                        <div>
                            {/* icon here */}
                            Icon here
                        </div>
                        <div>
                            <h5 className="mt-2">Employee</h5>
                            <h1>123</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeBox