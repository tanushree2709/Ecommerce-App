import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="author" content={author}></meta>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "71vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "YKart-Shop Now!",
  description: "mern stack project",
  keywords: "mern, react, mongodb, node ",
  author: "YKart",
};

export default Layout;
