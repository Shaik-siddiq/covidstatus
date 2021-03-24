import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import India from './components/India';
import World from './components/World';
let App =() => {
  return (
    <div>
     <Router>
     <Header/>
       <Switch>
         <Route exact path='/' ><India /></Route>
         <Route path='/India'> <India /> </Route>
         <Route path='/World'><World /></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
