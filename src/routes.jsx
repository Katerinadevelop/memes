import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { MemePage } from './pages/MemePage';
import React from 'react';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'meme/:memeId',
    element: <MemePage />,
  },
  {
    path: '/random',
    element: <MemePage />,
  },
]);
