import React from 'react'
import { Card } from 'react-bootstrap';

const Postimg = ({ post, date, Title }) => {
  return (
    <>
      <section>
        <Card>
          <Card.Img variant="top" src={post} />
        </Card>
        <div className="">
          <Card.Text className="mb-0 text-muted">{date}</Card.Text>
          <Card.Title>
            <a href="/" className="text-dark text-decoration-none">
              {Title}
            </a>
          </Card.Title>
        </div>
      </section>
    </>
  );
};
export default Postimg;