import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../utils/constants';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMainPage = location.pathname === '/';

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <h1
          className="navbar-brand cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img
            src={logo}
            alt="Logo"
            width="24"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          Memes API
        </h1>
        {isMainPage && (
          <button
            className="btn btn-outline-light"
            onClick={() => navigate('/random')}
          >
            Random
          </button>
        )}
      </div>
    </nav>
  );
};
