import { type Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/home/home';
import SubjectPage from './pages/subjectPage/subjectPage';
import Learn from './pages/learn/learnPage';

const App: Component = () => {

  return (
    <Routes>
      <Route path='/HemoExplore' component={Home} />
      <Route path='/HemoExplore/Learn'>
        <Route path='/' component={Learn} />
        <Route path='/:slug' component={SubjectPage} />
      </Route>
    </Routes>
  );
};

export default App;
