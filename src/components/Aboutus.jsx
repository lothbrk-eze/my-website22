import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container my-5" > 
      <h1 className="text-center text-primary mb-4">About Me</h1>

      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img
            src="/profile23.jpeg"
            alt="Ezekiel Kiprop"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-dark">Who I Am</h3>
          <p className="text-muted">
            I am an ambitious programmer from Kenya who enjoys using technology to solve
            problems and create useful digital experiences. I am always
            learning, building, and looking for better ways to turn ideas into
            practical solutions.
          </p>
        </div>
      </div>

      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src="/hood.jpeg"
            alt="Programming project"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="text-dark">My Mission</h3>
          <p className="text-muted">
            My goal is to use programming to solve real-world challenges,
            improve people's experiences, and build reliable applications that
            make work and everyday life easier.
          </p>
        </div>
      </div>

      <h3 className="text-center text-success mb-4">What I Bring</h3>
      <div className="row text-center mb-5">
        <div className="col-md-3">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Problem Solving</h5>
              <p className="card-text">I break down complex problems and work toward clear, useful solutions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Continuous Learning</h5>
              <p className="card-text">I keep improving my skills and stay curious about new technologies.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Creative Thinking</h5>
              <p className="card-text">I enjoy turning ideas into simple and engaging digital products.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Dependability</h5>
              <p className="card-text">I care about writing maintainable code and delivering work I can stand behind.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3 className="text-secondary">Let's Build Something Useful</h3>
        <p>
          I am open to learning, collaborating, and using technology to make a
          meaningful difference.
        </p>
        <Link to="/contact" className="btn btn-outline-primary mt-3">Contact Us Today</Link>
      </div>
    </div>
  );
};

export default AboutUs;
