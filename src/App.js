import React from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation>
        <Link  to='/'>Home</Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> About </Link>
    </Navigation>

    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
  </div>
);

export default App;
