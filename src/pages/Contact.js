import React from "react";
import Layout from "../components/Layout/Layout";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus" style={{ position: "fixed" }}>
        <div className="col-md-8">
          <img
            src="/images/contact.jpg"
            alt="contact"
            style={{ width: "90%", marginTop: "35px", marginLeft: "50px" }}
          />
        </div>
        <div className="col-md-4">
          <h1
            className="bg-dark p-2 text-white text-center"
            style={{ marginTop: "35px" }}
          >
            Contact Us
          </h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to contact 24x7
            available:
          </p>
          <p className="mt-3">
            <MdEmail /> : www.ykarthelp@app.com
          </p>
          <p className="mt-3">
            <FaPhone /> : 012-5463986
          </p>
          <p className="mt-3">
            <BiSupport /> : 1200-0000-3400 (toll-free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
