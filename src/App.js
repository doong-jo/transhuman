import './App.css';
import { Switch, Route } from 'react-router-dom';
import Showcase from './pages/Showcase';
import Home from './pages/Home';
import DressRoom from './pages/DressRoom';
import Preview from './pages/Preview';

function App() {
  return (
    <Switch>
      <Route path="/dressroom">
        <DressRoom />
      </Route>
      <Route path="/preview">
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
