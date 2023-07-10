import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Policy = () => {
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
          <h1 className="bg-primary p-2 text-white text-center">Privacy Policy</h1>
          <p className="text-justify mt-2">
          All Right Reserved &copy; InfoWebIndia
          </p>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Policy
