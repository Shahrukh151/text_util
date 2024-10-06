import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{ useState } from 'react';
import About from './component/About';
import Alert from './component/Alert';
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode,setMode]=useState("light");
  

  const toggleMode=()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been Enabled","Success");
      
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been Enabled","Success");
    }
  }

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
       setAlert({
        message:message,
        type:type
       })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  return (
   <>
  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5">
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<div><TextForm showAlert={showAlert} heading = "Enter Your Text" mode={mode}/></div>}/>
    <Route  exact path="about" element={<div><About mode={mode} /></div>}/>
  </Routes>
  </BrowserRouter>
{/* <TextForm showAlert={showAlert} heading = "Enter Your Text" mode={mode}/>   */}
{/* <About />  */}
</div>

   </>
  );
}
export default App