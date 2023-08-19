import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
/*import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes
} from "react-router-dom";*/

function App() {
  const [mode,setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },2000);

  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode activated", "success");
      setInterval(()=>{
        document.title ="TextUtils is amazing";
      }, 2000);
      setInterval(()=>{
        document.title ="Install TextUtils now";
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode activated", "Success");
    }

  }
  return (
    <>
      {/*<BrowserRouter>*/}
        <Navbar
          title="TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/*<Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={*/}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              {/*}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter> 
      */}
      </div>
    
    </>
  );
}
 
export default App;
