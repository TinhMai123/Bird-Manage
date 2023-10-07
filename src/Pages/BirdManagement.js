
import Navbar from '../Components/Navbar';
import React, { useEffect, useState } from 'react';
import '../index.css';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import fetchAllUser from '../Services/UserService';
import ReactPaginate from 'react-paginate';
import '../cssPages/BirdManagement.css';
import _ from "lodash";



const BirdManagement = (props) => {
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
      <div className="card-header text-center ">
        <h4 nextClassName="card-title">Bird Management</h4>
        <a href="/
        ">
          <button className="btn btn-success my-3"> Add New Bird </button>
        </a>
      </div>
      <Container>
        <div className="row" >
          <div className='image col-md-4'>
            <img src='https://bloghomestay.vn/wp-content/uploads/2023/02/hinh-anh-chim-chich-choe-than-va-chich-choe-lua-dep-nhat-hien-nay_2.jpg ' ></img>
          </div>
          <div className='col-md-8'>
            <Container>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Danh sách chim than
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>
                        <div className='sort-header'>
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
                        </div>
                      </th>

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
          </div>
        </div>


        <div className="row" >

          <div className=' col-md-8'>
            <Container>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Danh sách chim lửa
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>
                        <div className='sort-header'>
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
                        </div>
                      </th>

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
          </div>
          <div className='image col-md-4'>

            <img src='data:image/jpeg;base64,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'></img>
          </div>

        </div>
      </Container>




    </>

  )
}

export default BirdManagement