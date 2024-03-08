import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About - YKart"}>
      <div className="row contactus " style={{ position: "fixed" }}>
        <div className="col-md-6 ">
          <img
            src="/images/aboutUs.jpg"
            alt="contact"
            style={{ width: "100%", marginTop: "35px" }}
          />
        </div>
        <div className="col-md-4" style={{ marginTop: "35px" }}>
          <p className="text-justify mt-2" style={{ fontFamily: "cursive" }}>
            <p>Welcome to YKart - Your Ultimate Shopping Destination!</p>
            At YKart, we believe that shopping should be more than just a
            transaction; it should be an experience filled with excitement,
            discovery, and satisfaction. Step into a world where your shopping
            desires meet a curated selection of premium products, all designed
            to elevate your lifestyle. <br />
            Your satisfaction is our top priority, and we strive to make every
            interaction with us a positive one. Discover the Joy of Shopping
            with YKart. We invite you to explore our virtual aisles and discover
            a world of possibilities. From the latest fashion trends to
            cutting-edge technology, YKart is your go-to destination for all
            your needs. <br /> <br />
            <p>Thank you for choosing YKart. Happy shopping!</p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
