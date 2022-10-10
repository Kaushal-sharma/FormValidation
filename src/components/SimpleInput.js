import React from "react";
import useInput from "../hookes/use-input";

const SimpleInput = (props) => {
  let formIsValid = false;
  const {
    value: enterNameValue,
    isValid: enterNameValueIsValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameValue,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterEmailValue,
    isValid: enterEmailValueIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailValue,
  } = useInput((value) => value.includes("@"));

  if (enterNameValueIsValid && enterEmailValueIsValid) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    resetNameValue("");
    resetEmailValue("");
  };

  const nameInputClasses = nameError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterNameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="email"
          value={enterEmailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
