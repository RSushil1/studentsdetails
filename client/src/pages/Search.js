import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";


const Search = () => {
    const [students,setStudents] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const first_name = searchParams.get("name");

    useEffect(() => {
        getByName();
      }, [first_name]);
    


    const getByName = async () => {
        try {
          const { data } = await axios.get(`/students/name/${first_name}`);
          if (data) {
            setStudents(data);
            
          }
        } catch (error) {
          console.log(error);
        }
      };


  const handleViewDetails = (id) => {
    navigate(`/details?id=${id}`);
  };

  const sr = useRef(null);

  useEffect(() => {
    // The element we want to animate
    const element = sr.current;

    // Animate the element with gsap.from
    gsap.from(element, {opacity:0, x:'50%', duration: 0.5, delay:0.3 });

    // Optionally, you can clean up the animation when the component unmounts
    return () => {
      gsap.killTweensOf(element);
    };
  }, [first_name]);

  return (
    <>
      <Layout>
        <div className="container mt-5">
        <h1 className="text-center">Search Resuts</h1>
          <h6 className="text-center">
            {students?.length < 1
              ? "No Students Found"
              : `${students?.length} Found`
              } 
          </h6>
          <table
            ref={sr}
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
                      className="btn btn-primary btn-sm"
                      onClick={() => handleViewDetails(s._id)}
                    >
                      <Link className="btn btn-primary btn-sm text-light">
                        Details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default Search;
