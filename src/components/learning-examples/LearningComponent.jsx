import FirstComponent from './FirstComponent.jsx'
//braces and the name of the function component if we want to import a component rather than the default export, that exists in the same module
import {FifthComponent} from './FirstComponent.jsx'
import SecondComponent from './SecondComponent.jsx'
import FourthComponent from './FourthComponent.jsx'
import LearningJavaScript from './LearningJavascript'
import { Component } from 'react';


export default function LearningComponent(){

    return (    
    <> <FirstComponent></FirstComponent>
    <SecondComponent></SecondComponent>
    <ThirdComponentt></ThirdComponentt>
    <FourthComponent />
    <FifthComponent  />
    <LearningJavaScript /> </>
       
    );
}


//Normally each of the components needs its on module

//function components. They are child components of the App component


//class component

class ThirdComponentt extends Component{

    //we define a render method
    render(){
  
      return (
        <div className="ThirdComponent">Third Component</div>
      )
  
    }
   
  }