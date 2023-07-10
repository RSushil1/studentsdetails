import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <>
      <Layout>
      <div className="row d-flex justify-content-center mb-5" style={{ marginTop: "100px" }}>
        <div className="col-md-6 ">
          <img
            src="/images/about.avif"
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <div className="aboutText container" >
            <h1 className="text-dark">Simple CURD MERN FullStack Website</h1>
            <h5>Project made by Sushil Singh Rathore</h5>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default About;
