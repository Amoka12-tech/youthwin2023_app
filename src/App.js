import React, { useState } from 'react'
import './App.css';
import sampleImage from "./assets/images/noPics.png";
import logo from './assets/images/youthwinlogo.jpeg'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [stateName, setStateName] = useState("");
  const [userPic, setUserPic] = useState(null);

  const [viewForm, setViewForm] = useState(false);

  const toggleFormView = () => {
    setViewForm(!viewForm);
  };

  const convertToBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setUserPic(reader.result)
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} />
      {viewForm &&  <form>
          <span onClick={toggleFormView}> x </span>
          <h4>Membership Form</h4>
          <label for="userPic">
            <img src={!!userPic ? userPic : sampleImage} alt="Select Image" />
          </label>
          <input 
            style={{ display: 'none' }}
            onChange={(e) => convertToBase64(e.target.files[0])}
            type="file" 
            id="userPic" 
            name="userPic" />

          <input 
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />

          <input 
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />

          <select onChange={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select onChange={(e) => setStateName(e.target.value)}>
            <option value="">Select State</option>
            <option value="Abuja">Abuja</option>
            <option value="Kogi">Kogi</option>
          </select>
        </form>}

        {viewForm ? <button onClick={toggleFormView} className="getInvolvedBtn">
          GENERATE YOUR ID
        </button> : 
        <button onClick={toggleFormView} className="getInvolvedBtn">
          GET INVOLVED!
        </button>}
      </header>
    </div>
  );
}

export default App;
