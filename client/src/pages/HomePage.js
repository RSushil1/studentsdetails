import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";


const HomePage = () => {
  const [id, setId] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gpa, setGpa] = useState("");
  const [graduation_date, setGraduationDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [major, setMajor] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate("");

  const limit = 10;
  const [page, setPage] = useState("1");

  const [students, setStudents] = useState([]);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [totalPage, setTotalPage] = useState();
  const [totalStudents, setTotalStudents] = useState();
  const currentPage =
    ((Number(nextPage || Number(previousPage) + 2) + Number(previousPage || 0)) /
    2)

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/students", {
        id,
        first_name,
        last_name,
        email,
        age,
        major,
        gpa,
        graduation_date,
        gender,
        address,
        phone_number,
        city,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        console.log(res.data.doc.insertedId)
        navigate(`/details?id=${res.data.doc.insertedId}`);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  useEffect(() => {
    getAllStudents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  

  // paginated list of students
  const getAllStudents = async () => {
    try {
      const { data } = await axios.get(`/students?page=${page}&limit=${limit}`);
      setStudents(data.students);
      setPreviousPage(data.previousPage);
      setNextPage(data.nextPage);
      setTotalPage(data.totalPage);
      setTotalStudents(data.totalStudents);
     
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    setPage(currentPage-1)
  };

  const handleNextPage = () => {
    setPage(currentPage+1)
  };
  
  const handlePageChange = (p) => {
    setPage(p)
  };

  const createPaginationButton = () => {
    const paginationButtons = [];
    for (let i = 1; i <= totalPage; i++) {
      if (currentPage === i) {
        paginationButtons.push(
          <li key={i} className="page-item active" aria-current="page">
            <Link onClick={()=>handlePageChange(i)} className="page-link">{i}</Link>
          </li>
        );
      } else {
        paginationButtons.push(
          <li key={i} className="page-item">
            <Link onClick={()=>handlePageChange(i)} className="page-link">{i}</Link>
          </li>
        );
      }
    }
    return paginationButtons;
  };

  
  const handleViewDetails = (id) => {
    navigate(`/details?id=${id}`);
  };

  return (
    <Layout>
      <div>
        <div className="container">
          <h2 className="text-center p-2">List of all Students</h2>
        </div>
        <div className="container">
          {/* Button trigger modal */}
          <div className="row">
            <button
              type="button"
              className="btn btn-primary mb-3 ms-3 btn-sm col-sm-1  "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Create New
            </button>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Please Provide Credentials..
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {/* POST form */}
                  <form id="form" onSubmit={handleSubmit}>
                    <div className="row g-2">
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="first_name"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInputGrid1"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="floatingInputGrid">First Name</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="last_name"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInputGrid2"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="floatingInputGrid">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            type="number"
                            className="form-control"
                            id="floatingInputGrid3"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="floatingInputGrid">ID</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInputGrid4"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="floatingInputGrid">Email</label>
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="age"
                            type="text"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="form-control"
                            id="floatingInputGrid5"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputGrid">Age</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="phone_number"
                            type="text"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="form-control"
                            id="floatingInputGrid6"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputGrid">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="floatingInputGrid7"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputGrid">Address</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="form-control"
                            id="floatingInputGrid8"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputGrid">City</label>
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="gpa"
                            type="text"
                            value={gpa}
                            onChange={(e) => setGpa(e.target.value)}
                            className="form-control"
                            id="floatingInputGrid9"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputGrid">GPA</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                          name="graduation_date"
                            type="date"
                            value={graduation_date}
                            onChange={(e) => setGraduationDate(e.target.value)}
                            className="form-control"
                            id="floatingInputGrid10"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputGrid">
                            Graduation Date
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-md">
                        <div className="form-floating">
                          <select
                          name="major"
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                            className="form-select"
                            id="floatingSelectGrid11"
                          >
                            <option defaultValue/>
                            <option value="Information Technology">
                              Information Technology
                            </option>
                            <option value="Mechanical Engineering">
                              Mechanical Engineering
                            </option>
                            <option value="Electrical Engineering">
                              Electrical Engineering
                            </option>
                            <option value="Computer Science Engineering">
                              Computer Science Engineering
                            </option>
                            <option value="Biology">Biology</option>
                            <option value="Math">Math</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                          </select>
                          <label htmlFor="floatingSelectGrid">Major</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <select
                          name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-select"
                            id="floatingSelectGrid12"
                          >
                            <option defaultValue />
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <label htmlFor="floatingSelectGrid">Gender</label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        value="Refresh Page"
                        className="btn btn-primary"
                          data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <table
              id="myTable"
              className="table table-bordered table-success table-striped"
            >
              <thead className="table-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                {students?.map((s) => (
                  <tr key={s._id}>
                    <td>{s.id}</td>
                    <td>{s.first_name}</td>
                    <td>{s.last_name}</td>
                    <td>{s.email}</td>
                    <td>
                      <button
                        key={s._id}
                        type="button"
                        className ="btn btn-primary btn-sm"
                        onClick={() => handleViewDetails(s._id)}
                      >
                        <Link className='btn btn-primary btn-sm text-light'>
                          Details
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="container text-center">
              <div class="row align-items-start">
                <div className="col">
                  <div className="row ">
                    <nav aria-label="...">
                      <ul className="pagination">
                        {previousPage ? (
                          <li className="page-item">
                            <Link
                              className="page-link"
                              onClick={handlePrevPage}
                            >
                              Prev
                            </Link>
                          </li>
                        ) : (
                          <li className="page-item disabled">
                            <Link className="page-link">Prev</Link>
                          </li>
                        )}
                        {createPaginationButton()}
                        {nextPage ? (
                          <li className="page-item">
                            <Link
                              className="page-link"
                              onClick={handleNextPage}
                            >
                              Next
                            </Link>
                          </li>
                        ) : (
                          <li className="page-item disabled">
                            <Link className="page-link">Next</Link>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col text-primary fw-bold" id="pc">
                  page {currentPage} of {totalPage}
                </div>
                <div className="col text-primary fw-bold" id="tDoc">
                  Total Students {totalStudents}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
