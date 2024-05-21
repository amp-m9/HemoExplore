import { lazy, type Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/home/home';
import SubjectPage from './pages/subjectPage/subjectPage';
import Learn from './pages/learn/learnPage';
import { Transition } from 'solid-transition-group';

const App: Component = () => {

  const home = lazy(() => import('./pages/home/home'))

  return (
    <Transition
      mode="outin"
      onEnter={(el, done) => {
        const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 600
        });
        a.finished.then(done);
      }}
      onExit={(el, done) => {
        const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 600
        });
        a.finished.then(done);
      }}
    >
      <Routes>

        <Route path='/HemoExplore' component={home} />
        <Route path='/HemoExplore/Learn'>
          <Route path='/' component={Learn} />
          <Route path='/:slug' component={SubjectPage} />
        </Route>
      </Routes>
    </Transition>
  );
};

export default App;
