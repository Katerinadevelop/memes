import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = ({ id, url, title }) => {
  const navigate = useNavigate();

  return (
    <div className="col-xxl-3 col-xl-4 col-lg-5 col-lg-5 justify-content-center mb-3 mt-3">
      <div
        className="card card-size cursor-pointer"
        onClick={() => navigate(`meme/${id}`)}
      >
        <img
          src={url}
          className="card-img-top img-contain"
          width={200}
          height={200}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};
