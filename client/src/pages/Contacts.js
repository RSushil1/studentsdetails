import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contacts = () => {
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
          <h1 className="bg-primary p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about School feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@infoweb.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default Contacts
