import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Showcase from './pages/Showcase';
import Home from './pages/Home';
import DressRoom from './pages/DressRoom';
import Preview from './pages/Preview';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route path="/dressroom">
        <DressRoom />
      </Route>
      <Route path="/preview/:name">
        <Preview />
      </Route>
      <Route path="/showcase">
        <Showcase />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
