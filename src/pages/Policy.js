import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus " style={{ position: "fixed" }}>
        <div className="col-md-5 ">
          <img
            src="/images/PrivacyPolicy.png"
            alt="contactus"
            style={{ width: "80%", marginTop: "75px", marginLeft: "70px" }}
          />
        </div>
        <div
          className="col-md-6"
          style={{ marginTop: "75px", marginLeft: "50px" }}
        >
          <p>
            Thank you for visiting YKart. This Privacy Policy is designed to
            inform you about the types of information we collect. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you visit our website or make a purchase.
          </p>
          <p> Information We Collect:</p>
          <p>
            1. Personal Information <br />
            2. Data Usage <br />
            3. Cookies <br />
            4. Payment Details <br />
          </p>
          <p>
            By using our website, you agree to the terms of this Privacy Policy.
            Thank you for trusting YKart.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
