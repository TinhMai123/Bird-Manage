
import Navbar from '../Components/Navbar'
import React, { useEffect, useState } from 'react'
import '../index.css';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import fetchAllUser from '../Services/UserService';
import ReactPaginate from 'react-paginate';
import _ from "lodash";

const CageManage = (props) => {
    const [listBirds, setlistBirds] = useState([]);
    const [totalBirds, setTotalBirds] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const [sortBy, setSortBy] = useState("asc");
    const [sortField, setSortField] = useState("id");

    useEffect(() => {
        getUsers(1);
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            console.log("............", res);
            setlistBirds(res.data)
            setTotalPage(res.total_pages)
        }
    }

    const handlePageClick = (event) => {
        console.log(">.....", event)
        getUsers(event.selected + 1);
    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy);
        setSortField(sortField);
        let cloneLisUsers = _.cloneDeep(listBirds);
        cloneLisUsers = _.orderBy(cloneLisUsers, [sortField], [sortBy]);
        setlistBirds(cloneLisUsers);
    }
    return (
        <>
            <Navbar />
            <div className="card-header text-center">
                <h4 nextClassName="card-title">Cage Management</h4>
            </div>
            <button> Add New Bird </button>
            <Container>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        Danh sách chim
                    </div>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th><div className='sort-header'>
                                        <span>Id</span>
                                        <span>
                                            <i
                                                className="fa-solid fa-arrow-down-long"
                                                onClick={() => handleSort("desc", "id")}
                                            ></i>
                                            <i
                                                className="fa-solid fa-arrow-up-long"
                                                onClick={() => handleSort("asc", "id")}
                                            ></i>
                                        </span>
                                    </div>
                                    </th>
                                    <th>
                                        <div className='sort-header'>
                                            <span>Type</span>
                                            <span>
                                                <i
                                                    className="fa-solid fa-arrow-down-long"
                                                    onClick={() => handleSort("desc", "id")}
                                                ></i>
                                                <i
                                                    className="fa-solid fa-arrow-up-long"
                                                    onClick={() => handleSort("asc", "id")}
                                                ></i>
                                            </span>
                                        </div>

                                    </th>
                                    <th>
                                        <div className='sort-header'>
                                            <span>Mutasion</span>
                                            <span>
                                                <i
                                                    className="fa-solid fa-arrow-down-long"
                                                    onClick={() => handleSort("desc", "id")}
                                                ></i>
                                                <i
                                                    className="fa-solid fa-arrow-up-long"
                                                    onClick={() => handleSort("asc", "id")}
                                                ></i>
                                            </span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='sort-header'>
                                            <span> Sex</span>
                                            <span>
                                                <i
                                                    className="fa-solid fa-arrow-down-long"
                                                    onClick={() => handleSort("desc", "id")}
                                                ></i>
                                                <i
                                                    className="fa-solid fa-arrow-up-long"
                                                    onClick={() => handleSort("asc", "id")}
                                                ></i>
                                            </span>
                                        </div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {listBirds && listBirds.length > 0 &&
                                    listBirds.map((item, index) => {
                                        return (
                                            <tr key={`users-${index}`}>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.first_name}</td>
                                                <td>{item.last_name}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>


                        </Table>
                    </div>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={totalPage}
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

        </>

    )
}

export default CageManage