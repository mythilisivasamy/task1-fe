import React from 'react';

const Post = ({ post }) => {
    return (
    <div className="card mb-2">
      {post.id !== 'Job' && (
        <img
          src={`./images/${post.id}img.svg`}
          className="card-img-top"
          alt={post.id}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">
          <img src={`./images/${post.id}.svg`} alt="pic" />
          <span className="mx-2 fs-6">{post.id}</span>
        </h5>

        <div className="d-flex justify-content-between">
          <p className="fw-bold fs-5">{post.title}</p>
          <p>
            <img
              src="./images/dots.svg"
              alt="pic2"
              className="dots "
              data-bs-toggle="dropdown"
            />
          </p>
        </div>
        <p className="fw-normal fs-6">{post.desc}</p>
        {post.id === 'Meetup' && (
          <div className="w-100 border rounded-3 text-center mb-1">
            <span className="text-red fs-6 fw-bold">visit website</span>
          </div>
        )}
        {post.id === 'Job' && (
          <div className="w-100 border rounded-3 text-center mb-1">
            <span className="text-green fs-6 fw-bold">Apply on Time jobs</span>
          </div>
        )}
        <div className="d-flex justify-content-between">
          <div>
            <img src={`./images/${post.personImg}`} alt={post.id} />
            <span className="fs-6 mx-2">{post.personName}</span>
          </div>
          <div>
            <p>
              <img src="./images/visible.svg" alt={post.id} />
              <span className="text-muted mx-2">{post.views} views</span>
              <img src="./images/share.svg" alt={post.id} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
