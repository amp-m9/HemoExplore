import { type Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import Home from './components/home/home';
import SubjectPage from './components/subjectPage/subjectPage';
import Learn from './components/learn/learnPage';

const App: Component = () => {

  return (
    <Routes>
      <Route path='/HemoExplore' component={Home} />
      <Route path='/HemoExplore/Learn' component={Learn} />
      <Route path='/HemoExplore/Learn/:slug' component={SubjectPage} />
    </Routes>
  );
};

export default App;
