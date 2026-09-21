import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg' 
import viteLogo from './assets/vite.svg'
import './App.css'
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import { useForm } from 'react-hook-form';


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
function onSubmit(data) {
  alert("Form submitted successfully!");
  console.log(data);
}
function onError(errors) {
  alert("Form submission failed. Please check the input fields.");
}
 
 
  
  return (
   <form onSubmit={handleSubmit(onSubmit, onError)}>

      <div>
        <label>First Name</label>
        <input {...register("firstName", { required: true, minLength:{ value: 2, message: "First name is required and must be at least 2 characters long" } })} />  
      </div>
       <div>
        <label>Middle Name</label>
        <input {...register("middleName")} />  
      </div>
      <br/>
       <div>
        <label>Last Name</label>
        <input {...register("lastName")} />  
      </div>
      <br/>
      <input type="submit" />

    </form>
   
    
  )
}

export default App
