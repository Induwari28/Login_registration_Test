import React from 'react';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <p className="text-muted">Welcome back! Please login.</p>
        <form>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email' className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0' />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
