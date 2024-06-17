import React from 'react';

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between my-2 align-items-end d-none d-md-flex">
      <img src="./images/logo.svg" alt="logo" />
      <div className="bg-light rounded-4 px-1">
        <img src="./images/search.svg" alt="search" />
        <span className="mx-2 d-inline-block small">
          Search for your favorite group in ATG
        </span>
      </div>
      <div>
        <span
          className="small btn btn-sm btn-outline"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create an Account
        </span>{' '}
        <span className="txtblue small">Its free !</span>
      </div>
    </nav>
  );
};

export default NavBar;

export const MenuBar = () => {
  return (
    <nav className="d-flex justify-content-between p-2 mb-2 align-items-end d-none d-md-flex">
      <div className="d-flex mx-2 gap-5">
        <a className="small active" href="./">
          All posts(32)
        </a>
        <a className="small text-muted" href="./">
          Article
        </a>
        <a className="small text-muted" href="./">
          Event
        </a>
        <a className="small text-muted" href="./#">
          Education
        </a>
        <a className="small text-muted" href="./">
          Job
        </a>
      </div>
      <div className="d-flex align-items-baseline">
        <div className="mx-2 small">Write post</div>
        <div>
          <button type="button" className="btn btn-outline-primary btn-sm">
            <img src="./images/group.svg" alt="pic-group " /> Join Group
          </button>
        </div>
      </div>
    </nav>
  );
};
