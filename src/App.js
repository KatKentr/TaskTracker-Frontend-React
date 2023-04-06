import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import LearningComponent from './components/learning-examples/LearningComponent.jsx';
import TodoApp from './components/todo/TodoApp.jsx'

function App() {
  return (

    //with className we specify the css class
    <div className="App">
          
          <TodoApp />
    </div>
  );
}






export default App;
