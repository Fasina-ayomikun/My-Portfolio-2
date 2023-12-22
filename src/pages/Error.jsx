import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='error'>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to='/'>Back Home</Link>
      </div>
    </section>
  );
};

export default Error;
