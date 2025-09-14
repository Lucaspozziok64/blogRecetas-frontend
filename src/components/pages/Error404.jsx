import React from 'react';
import { Link } from 'react-router';

const Error404 = () => {
    return (
       <section className="text-center">
      <img src="https://img.freepik.com/premium-vector/error-404-with-cute-peanut-mascot_152558-59292.jpg" className='img-fluid' alt="error 404" />
      <div className='my-2'>
        <Link className="btn btn-success" to={'/'}>Volver al inicio</Link>
      </div>
    </section>
    );
};

export default Error404;