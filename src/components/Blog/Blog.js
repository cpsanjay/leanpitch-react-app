import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="webinar-container">
      <h1>Blogs</h1>

      <div className="blog-grid">
        <div className="single-blog">
          <div className="blog-info">
            <p>RProduct Management Certifications</p>
            <p>By Jayaprakash D B</p>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-info">
            <p>What is a Product really?</p>
            <p>By Satisha Venkataramaiah</p>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-info">
            <p>User Experience in a Nutshell</p>
            <p>By Pravat Ranjan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
