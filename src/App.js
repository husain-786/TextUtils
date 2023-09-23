/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  //It is a state which defines the mode of Navbar on the action of switch........
  const [mode, setMode] = useState("light")
  // State used to change the text beside the toggle button in NavBar, it is sent as props in the NavBar.....
  const[btnText, setbtnText] = useState("Enable dark Mode")
  // style state specially used for About.JS.........
  const [style, setStyle] = useState({
    color: "black",
    background: "white",
  })

  // State variable used for alert mesagesd.....
  const [alert, setAlert] = useState(null)

  // function used to show the alert contents whenever required......
  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type
    })

    // dismissing the alert message after 2 seconds......
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // function which will change or say handle the value of mode and will be sent as props in the NavBar.......
  const toggleMode = ()=>{
    if (mode === "dark"){
      setMode("light")
      setbtnText("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      setStyle({
        color: "black",
        background: "white",
      })
      showAlert("Light Mode Have Been Enabled", "success")
    }
    else{
      setMode("dark")
      setbtnText("Enable Light Mode")
      document.body.style.backgroundColor = "black"
      setStyle({
        color: "white",
        background: "black",
      })
      showAlert("Dark Mode Have Been Enabled", "success")
    }
  }

  // state used to change the different color modes of page.......
  const [colorModes, changeModeColors] = useState({
    randomTextColor: "black",
    randomBackgroundColor: "white",
  })
  // for primary color mode....
  const changeModesPrimary = ()=>{
    setMode("red")
    setStyle({
      color: "white",
      background: "#0D6EFD"
    })
    document.body.style.backgroundColor = "#0D6EFD"     
    changeModeColors({
      randomTextColor: "#white",
      randomBackgroundColor: "#0D6EFD"
    })
    showAlert("Primary Mode Have Been Enabled", "success")
    document.title="TextUtils - Primary Mode"
  }
  // for secondary color mode....
  const changeModesSecondary = ()=>{
    setMode("secondary")
    setStyle({
      color: "white",
      background: "#6C757D"
    })
    document.body.style.backgroundColor = "#6C757D"    
    changeModeColors({
      randomTextColor: "#white",
      randomBackgroundColor: "#6C757D"
    })
    showAlert("Secondary Mode Have Been Enabled", "success")
    document.title="TextUtils - Secondary Mode"
  }
  // for success color mode....
  const changeModesSuccess = ()=>{
    setMode("success")
    setStyle({
      color: "white",
      background: "#198754"
    })
    document.body.style.backgroundColor = "#198754"    
    changeModeColors({
      randomTextColor: "#white",
      randomBackgroundColor: "#198754"
    })
    showAlert("Success Mode Have Been Enabled", "success")
    document.title="TextUtils - Success Mode"
  }
  // for danger color mode....
  const changeModesDanger = ()=>{
    setMode("danger")
    setStyle({
      color: "white",
      background: "#DC3545"
    })
    document.body.style.backgroundColor = "#DC3545"    
    changeModeColors({
      randomTextColor: "#white",
      randomBackgroundColor: "#DC3545"
    })
    showAlert("Danger Mode Have Been Enabled", "success")
    document.title="TextUtils - Danger Mode"
  }
  // for warning color mode....
  const changeModesWarning = ()=>{
    setMode("warning")
    setStyle({
      color: "white",
      background: "#FFC107"
    })
    document.body.style.backgroundColor = "#FFC107"    
    changeModeColors({
      randomTextColor: "#white",
      randomBackgroundColor: "#FFC107"
    })
    showAlert("Warning Mode Have Been Enabled", "success")
    document.title="TextUtils - Warning Mode"
  }
  // for info color mode....
  const changeModesInfo = ()=>{
    setMode("info")
    setStyle({
      color: "white",
      background: "#0DCAF0"
    })
    document.body.style.backgroundColor = "#0DCAF0"    
    changeModeColors({
      randomTextColor: "#white",
      randomBackgroundColor: "#0DCAF0"
    })
    showAlert("Info Mode Have Been Enabled", "success")
    document.title="TextUtils - Info Mode"
  }
  // for dark color mode....
  const changeModesDark = ()=>{
    setMode("dark")
    setStyle({
      color: "white",
      background: "black"
    })
    document.body.style.backgroundColor = "black"    
    changeModeColors({
      randomTextColor: "white",
      randomBackgroundColor: "black"
    })
    showAlert("Dark Mode Have Been Enabled", "success")
    document.title="TextUtils - Dark Mode"

    setInterval(()=>{
      document.title="Learning React"
    }, 1000)
    setInterval(()=>{
      document.title="Executing React"
    }, 1420)
  }
  // for dark color mode....
  const changeModesLight = ()=>{
    setMode("light")
    setStyle({
      color: "black",
      background: "white"
    })
    document.body.style.backgroundColor = "white"    
    changeModeColors({
      randomTextColor: "black",
      randomBackgroundColor: "white"
    })
    showAlert("Light Mode Have Been Enabled", "success") 
    document.title="TextUtils - Home"   
  }
// Initially Switch was included inside the Router version less than 6 but now the switch has been removed from the Router 
// version6, Current Syntax is <Router><Routes><Route path="" element=""></Route></Routes></Router>
  return (
    <>  
      {/* Implemeting Router here to open About and TextUtils without reloading page.....
      Use of React Router starts with the Router Tag...... */}
      <Router>
        
          {/* Sending title as string */}
          {/* <Route element={<Navbar titl e="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} style={style}  changeModesPrimary={changeModesPrimary} changeModesSecondary={changeModesSecondary} changeModesSuccess={changeModesSuccess} changeModesDanger={changeModesDanger} changeModesWarning={changeModesWarning} changeModesInfo={changeModesInfo} changeModesLight={changeModesLight} changeModesDark={changeModesDark}/>}/> */}
          <Navbar titl e="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} style={style}  changeModesPrimary={changeModesPrimary} changeModesSecondary={changeModesSecondary} changeModesSuccess={changeModesSuccess} changeModesDanger={changeModesDanger} changeModesWarning={changeModesWarning} changeModesInfo={changeModesInfo} changeModesLight={changeModesLight} changeModesDark={changeModesDark}/>
          
          {/* Sending showAlert function as props so that we can use it on different button actions.... */}
          {/* <Route element={<Alert alert={alert}/>}/> */}
          <Alert alert={alert}/>

          {/* Sending title as number */}
          {/* <Navbar title={3} aboutText="About Us"/>     */}

          {/* Not any props is sent, in this case this default values get executed */}
          {/* <Navbar/> */}

          {/* <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} toggleMode={toggleMode} style={style} changeModesPrimary={changeModesPrimary} changeModesSecondary={changeModesSecondary} changeModesSuccess={changeModesSuccess} changeModesDanger={changeModesDanger} changeModesWarning={changeModesWarning} changeModesInfo={changeModesInfo} changeModesLight={changeModesLight} changeModesDark={changeModesDark}/>
          </div> */}
          
          {/* <About mode={mode} style={style} changeModesPrimary={changeModesPrimary} changeModesSecondary={changeModesSecondary} changeModesSuccess={changeModesSuccess} changeModesDanger={changeModesDanger} changeModesWarning={changeModesWarning} changeModesInfo={changeModesInfo} changeModesLight={changeModesLight} changeModesDark={changeModesDark}/> */}
        <Routes>
          <Route path="/about" element={
            <About mode={mode} style={style} changeModesPrimary={changeModesPrimary} changeModesSecondary={changeModesSecondary} changeModesSuccess={changeModesSuccess} changeModesDanger={changeModesDanger} changeModesWarning={changeModesWarning} changeModesInfo={changeModesInfo} changeModesLight={changeModesLight} changeModesDark={changeModesDark}/>
          }/>
          <Route path="/" element={
            <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} toggleMode={toggleMode} style={style} changeModesPrimary={changeModesPrimary} changeModesSecondary={changeModesSecondary} changeModesSuccess={changeModesSuccess} changeModesDanger={changeModesDanger} changeModesWarning={changeModesWarning} changeModesInfo={changeModesInfo} changeModesLight={changeModesLight} changeModesDark={changeModesDark}/>
            </div>        
          }/>
        </Routes>
      </Router>        
    </>
  );
}
export default App;


// State(React Hooks):- 
// Its the state of a component
// e.g.,  const[text, setText] = useState("first")
// Here text is a state contains text="first", we can change states values like variables it gives errors, 
// so we use methods to update the state values, if we try to store like other primitive side gives error.
//  setText is a function used in above example for the text to update                                                       
