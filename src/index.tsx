/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { Router } from '@solidjs/router';
import Background from './pages/Background';
import Navbar from './pages/navbar';
import App from './App';


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
