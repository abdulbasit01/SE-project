import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Selectors from "./Components/Comp1/FrontPage"
import Teacher from "./Components/Comp1/Teacher/Teacher.jsx"
import Students from "./Components/Comp1/Students/Students.jsx"
// import Data from "./Components/Comp1/Students/StudentsData"
import NavBar from "./Components/Comp1/NavBar/NavBar"
import './App.css';

class App extends Component {
  componentDidMount(){
    console.log("App Started")
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={NavBar}/>
        </Switch>
        <Switch>
          <Route exact path='/Selectors' component={Selectors}/>
        </Switch>
        <Switch>
          <Route path='/Selectors/Students' component={Students}/>
        </Switch>
        <Switch>
          <Route path='/Selectors/Teacher' component={Teacher}/>
        </Switch>
      </div>
    );
  }
}

export default App;
