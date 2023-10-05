import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import '../index.css';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import fetchAllUser from '../Services/UserService';
import ReactPaginate from 'react-paginate';
import Footer from '../Components/Footer';

// TableUsers
const BirdProfile = (props) => {

    const [listBirds, setlistBirds] = useState([]);
    const [totalBirds, setTotalBirds] = useState(0);
    const [totalPgae, setTotalPage] = useState(0);

    useEffect(() => {
        getUsers(1);
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            console.log("............",res);
            setTotalBirds(res.total)
            setlistBirds(res.data)
            setTotalPage(res.total_pages)
        }
    }

    const handlePageClick = (event) => {
        console.log( ">....." ,event)
        getUsers(event.selected + 1);
    }
    return (
        <>
            <Navbar />
            <Container>
        
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        Danh sách chim
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listBirds && listBirds.length > 0 &&
                                listBirds.map((item, index) => {
                                    return (
                                        <tr key={`users-${index}`}>
                                           <a href='https://www.youtube.com/watch?v=sGQSz22U8VM'> <td>{item.id}</td> </a>
                                            <td>{item.email}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>


                    </Table>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={totalPgae}
                        previousLabel="< previous"                      
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        nextClassName='page-item'
                        nextLinkClassName='page-link'
                        breakClassName='page-item'
                        breakLinkClassName='page-link'
                        containerClassName='pagination'
                        activeClassName='active'
                    />
                </div>
            </Container>
            <Footer/>
        </>

    )
}

export default BirdProfile