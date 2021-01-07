import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './Pages/Intro';
import Projects from './Pages/Projects';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/portfolio/" component={Intro} />
          <Route path="/portfolio/projects" component={Projects} />
          <Route path="/portfolio/education" component={Education} />
          <Route path="/portfolio/experience" component={Experience} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;