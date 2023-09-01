/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { type Component, onMount } from 'solid-js';
import { Route, Router, Routes } from '@solidjs/router';
import Home from './components/home/home';
import SubjectPage from './components/subjectPage/subjectPage';
import Background from './components/Background';
import Navbar from './components/navbar';
import App from './App';

// const root = document.getElementById('root');

render(
  () =>
  (
    <Router>
      <Background />
      <Navbar />
      <App />
    </Router>
  )
  ,
  document.getElementById('root')!);
