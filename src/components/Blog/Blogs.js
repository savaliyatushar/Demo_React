import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Blogs({ heading, Blogspost, Blogsdate, BlogsTitle }) {
  return (
    <>
      <section className="hero-section position-relative bg-light-blue padding-medium">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="text-center padding-top no-padding-bottom">
                <h2 className="display-2 text-uppercase text-dark">
                  {heading}
                </h2>
                <span>
                  <Link to="/home" className=" text-decoration-none text-dark">
                    Home
                  </Link>
                  <span>/BLOG</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Card>
          <Card.Img variant="top" src={Blogspost} />
        </Card>
        <div className="">
          <Card.Text className="mb-0 text-muted">{Blogsdate}</Card.Text>
          <Card.Title>
            <a href="/" className="text-dark text-decoration-none">
              {BlogsTitle}
            </a>
          </Card.Title>
        </div>
      </section>
    </>
  );
}

export default Blogs