import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Logo from "../styles/img/tesodev.jpg";
import { Input } from "./Input";
import { Button } from "./Button";
import Errors from "./Errors";
import { useDispatch } from "react-redux";
import { setError } from "../features/errorSlice";

export default function AddNew() {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    Name: "",
    Country: "",
    City: "",
    Email: "",
  });

  function onValidate(submittedData) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (submittedData.Name.length < 4 || submittedData.Name.length > 60) {
      let message = "Name and surname should contain at least 4 words";
      setErrorToState(message);
      
    } else if (
      submittedData.Country.length < 2 ||
      submittedData.Country.length > 40
    ) {
      let message = "Country should contain at least 2 words";
      setErrorToState(message);
      
    } else if (submittedData.City.length < 2 || submittedData.City.length > 40) {
      let message = "City should contain at least 2 words";
      setErrorToState(message);
     
    } else if (regex.test(submittedData.Email) === false) {
      let message = "Incorrect email";
      setErrorToState(message);
    
    } else {
      document
        .querySelectorAll(".text-input")
        .forEach((input) => (input.value = ""));

      setDisabled(true);
    }
  }

  function setErrorToState(message) {
    let errorData = {
      message: message,
      visibility: true,
    };
    dispatch(setError(errorData));
  }

  function setDisableControl() {
    if (!data.Name || !data.Country || !data.City || !data.Email) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <div className="add-new-container">
      <div className="input-header">
        <img src={Logo} alt="tesodev" />
        <div className="return-page">
          <Link to={-1}>
            <div className="return-button-container">
              <BsArrowLeft />
              <p>Return to List Page</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="input-container">
        <div className="input-content-container">
          <label>Name Surname</label>
          <div className="input-items">
            <Input
              type="text"
              className="text-input"
              onChange={(e) => {
                setData(data, (data.Name = e.target.value));
                setDisableControl();
              }}
            />
          </div>
          <label>Country</label>
          <div className="input-items">
            <Input
              type="text"
              className="text-input"
              onChange={(e) => {
                setData(data, (data.Country = e.target.value));
                setDisableControl();
              }}
            />
          </div>
          <label>City</label>
          <div className="input-items">
            <Input
              type="text"
              className="text-input"
              onChange={(e) => {
                setData(data, (data.City = e.target.value));
                setDisableControl();
              }}
            />
          </div>
          <label>Email</label>
          <div className="input-items">
            <Input
              type="text"
              className="text-input"
              onChange={(e) => {
                setData(data, (data.Email = e.target.value));
                setDisableControl();
              }}
            />
          </div>
          <div className="button-container">
            <Button
              text="Add"
              className={`primary-button ${disabled ? "inactive" : ""}`}
              disabled={disabled}
              onClick={() => {
                onValidate(data);
              }}
            />
          </div>
        </div>
      </div>
      <div className="error-container">
        <Errors />
      </div>
    </div>
  );
}
