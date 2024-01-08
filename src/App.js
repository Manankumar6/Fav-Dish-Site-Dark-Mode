
import { React, useState } from 'react';
import './App.css';
import Common from './Common';
import Header from './Header';
import Altmsg from './Altmsg';


function App() {

  const [mode, setmode] = useState("light");
  const [text, settext] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const darkmode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.background = "black"
      settext("Enable Light Mode")
      showAlert("Dark Mode Has Been Enabled", "success")

    } else {
      setmode("light")
      document.body.style.background = "white"
      settext("Enable Dark Mode")
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }
  return (
    <>
      <Header mode={mode} darkmode={darkmode} text={text} />
      <Altmsg alert={alert} />
      <Common mode={mode} />
    </>
  );
}

export default App;
