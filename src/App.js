import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as  Router, Route } from 'react-router-dom';
import React  from 'react';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercises.component';
import CreateExercise from './components/create-exercises.component';
import CreateUser from './components/create-user.component';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create"  component={CreateExercise}/>
        <Route path="/user"  component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
