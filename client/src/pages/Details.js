import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Details = () => {
  const [student, setStudent] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const _id = searchParams.get("id");

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

  useEffect(() => {
    getById();
  }, [location]);

  useEffect(() => {
    setId(student.id)
    setFirstName(student.first_name)
    setLastName(student.last_name)
    setEmail(student.email)
    setAge(student.age)
    setAddress(student.address)
    setGpa(student.gpa)
    setGraduationDate(student.graduation_date)
    setGender(student.gender)
    setPhoneNumber(student.phone_number)
    setMajor(student.major)
    setCity(student.city)
    
  }, [student]);

  const getById = async () => {
    try {
      const { data } = await axios.get(`/students/${_id}`);
      if (data) {
        setStudent(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // form edit
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {

      const {data} = await axios.put(`/students/${student._id}`, {
        id,first_name,last_name,email,age,address,gpa,graduation_date,gender,phone_number,major,city
      });
      if (data?.success) {
        toast.success(data.message);
        setStudent(data.doc)
        navigate(`/details?id=${student._id}`);
     
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    } 
  };
  // form delete
  const handleDeleteSubmit = async (id) => {
    try {
      const res = await axios.delete(`/students/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/')
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };


  return (
    <Layout>
      <>
        <div>
          <div className="container">
            <h1 className="text-center">Details</h1>
          </div>
          <div className="container">
            <div className="card shadow-lg mb-3 w-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="./images/blank-profile-picture.jpg"
                    className="img-fluid rounded-start"
                    alt="studentImg"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body" id="card_body">
                    <dl className="row">
                      <h1 className="text-light bg-dark">
                        {student.first_name} {student.last_name}
                      </h1>
                      <dt className="col-sm-5">Id</dt>
                      <dd className="col-sm-5">{student.id}</dd>
                      <dt className="col-sm-5">Email</dt>
                      <dd className="col-sm-5">{student.email}</dd>
                      <dt className="col-sm-5">Gender</dt>
                      <dd className="col-sm-5">{student.gender}</dd>
                      <dt className="col-sm-5">Age</dt>
                      <dd className="col-sm-5">{student.age}</dd>
                      <dt className="col-sm-5">Phone Number</dt>
                      <dd className="col-sm-5">{student.phone_number}</dd>
                      <dt className="col-sm-5">Address</dt>
                      <dd className="col-sm-5">{student.address}</dd>
                      <dt className="col-sm-5">City</dt>
                      <dd className="col-sm-5">{student.city}</dd>
                      <dt className="col-sm-5">Major</dt>
                      <dd className="col-sm-5">{student.major}</dd>
                      <dt className="col-sm-5">GPA</dt>
                      <dd className="col-sm-5">{student.gpa}</dd>
                      <dt className="col-sm-5">Graduation Date</dt>
                      <dd className="col-sm-5">{student.graduation_date}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {/* Button trigger modal */}
                <button
                  id="E"
                  type="button"
                  className="btn btn-primary btn-sm w-25 ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Edit Details...
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row g-2">
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                  onChange={(e) => setFirstName(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="floatingInputGrid1"
                                  placeholder="name@example.com"
                                  value={first_name}
                                  required
                                  autoFocus
                                />
                                <label htmlFor="floatingInputGrid">
                                  First Name
                                </label>
                              </div>
                            </div>
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                  onChange={(e) => setLastName(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="floatingInputGrid2"
                                  placeholder="name@example.com"
                                  value={last_name}
                                  required
                                  autoFocus
                                />
                                <label htmlFor="floatingInputGrid">
                                  Last Name
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row g-2">
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                  onChange={(e) => setEmail(e.target.value)}
                                  type="email"
                                  className="form-control"
                                  id="floatingInputGrid4"
                                  placeholder="name@example.com"
                                  value={email}
                                  required
                                />
                                <label htmlFor="floatingInputGrid">Email</label>
                              </div>
                            </div>
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                  
                                  onChange={(e) => setAge(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="floatingInputGrid5"
                                  placeholder="name@example.com"
                                  value={age}
                                />
                                <label htmlFor="floatingInputGrid">Age</label>
                              </div>
                            </div>
                          </div>
                          <div className="row g-2">
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                               
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                  type="text"
                                  className="form-control"
                                  id="floatingInputGrid6"
                                  placeholder="name@example.com"
                                  value={phone_number}
                                />
                                <label htmlFor="floatingInputGrid">
                                  Phone Number
                                </label>
                              </div>
                            </div>
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                 
                                  onChange={(e) => setAddress(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="floatingInputGrid7"
                                  placeholder="name@example.com"
                                  value={address}
                                />
                                <label htmlFor="floatingInputGrid">
                                  Address
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row g-2">
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                
                                  onChange={(e) => setCity(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="floatingInputGrid8"
                                  placeholder="name@example.com"
                                  value={city}
                                />
                                <label htmlFor="floatingInputGrid">City</label>
                              </div>
                            </div>
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                
                                  onChange={(e) => setGpa(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="floatingInputGrid9"
                                  placeholder="name@example.com"
                                  value={gpa}
                                />
                                <label htmlFor="floatingInputGrid">GPA</label>
                              </div>
                            </div>
                          </div>
                          <div className="row g-2">
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                  onChange={(e) =>
                                    setGraduationDate(e.target.value)
                                  }
                                  type="date"
                                  className="form-control"
                                  id="floatingInputGrid10"
                                  placeholder="name@example.com"
                                  value={graduation_date}
                                />
                                <label htmlFor="floatingInputGrid">
                                  Graduation Date
                                </label>
                              </div>
                            </div>
                            <div className="col-md">
                              <div className="form-floating">
                                <select
                                  className="form-select"
                                  id="floatingSelectGrid11"
                                  
                                  onChange={(e) => setMajor(e.target.value)}
                                >
                                  <option value>{major}</option>
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
                                <label htmlFor="floatingSelectGrid">
                                  Major
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row g-2 m-1 ms-auto">
                            <div className="col-md">
                              <div className="form-floating">
                                <select
                                  className="form-select"
                                  id="floatingSelectGrid12"
                                  onChange={(e) => setGender(e.target.value)}
                                >
                                  <option value>{gender}</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">
                                  Gender
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" value="Refresh Page" onClick={(e)=>handleUpdate(e)} className="btn btn-primary" data-bs-dismiss="modal">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button trigger modal */}
                <button
                  id="D"
                  type="button"
                  className="btn btn-danger btn-sm "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModa2"
                >
                  DELETE
                </button>
                {/* Modal */}
                <div
                  className="modal fade bg-danger bg-opacity-50"
                  id="exampleModa2"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabe2">
                          Delete {student.first_name} {student.last_name}
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h1 className="text-danger">Are you sure?</h1>
                        <p>
                          Do you really want to delete these records? This
                          process cannot be undone.
                        </p>
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
                          type="button"
                          onClick={() => handleDeleteSubmit(student._id)}
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Details;
