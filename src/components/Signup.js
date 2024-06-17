import React from 'react';

const Signup = () => {
  return (
    <div
      className="container modal fade"
      style={{ width: '48rem' }}
      id="exampleModal"
    >
      <div class="modal-header">
        <p className="p-2 headstyle fw-bold small text-center">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="card-body d-flex justify-content-between">
        <div>
          <p className="fs-5 fw-bolder">Create Account</p>
          <div class="input-group">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="form-control bg-light"
            placeholder="Email"
          />
          <input
            type="password"
            className="form-control bg-light"
            placeholder="Password"
          />
          <input
            type="password"
            className="form-control bg-light"
            placeholder="Confirm Password"
          />
          <div className="d-block mx-auto rounded-3 mt-3 btn btn-primary">
            Create Account
          </div>
          <div className="d-block mx-auto border rounded-3 mt-3 btn btn-white">
            <span> </span> Sign Up with Google
          </div>
          <div className="d-block mx-auto border rounded-3 mt-3 btn btn-white">
            Sign Up with Facebook
          </div>
        </div>
        <div>
          <p className="small">
            Already have an account?{' '}
            <span className="text-primary small">Sign In</span>
          </p>
          <p>
            <img src="./images/atg_illustration.svg" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
