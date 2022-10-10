import useInput from "../hookes/use-input";

const BasicForm = (props) => {

  let formIsValid = false

  const {
    value:firstName,
    isValid:firstNameIsValid,
    hasError:firstNameError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameBlurHandler,
    reset:resetFirstName
  } = useInput(value=>value.trim() !== '')

  
  const {
    value:lastName,
    isValid:lastNameIsValid,
    hasError:lastNameError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLirstName
  } = useInput(value=>value.trim() !== '')

  const {
    value:email,
    isValid:emailIsValid,
    hasError:emailError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmail
  } = useInput(value=>value.includes('@'))

  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid=true
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    resetFirstName()
    resetLirstName()
    resetEmail()
  }

  const firstNameClasses = firstNameError ? 'form-control invalid':'form-control'
  const lastNameClasses = lastNameError ? 'form-control invalid':'form-control'
  const emailClasses = emailError ? 'form-control invalid':'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameError && <p className="error-text">First name must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameError && <p className="error-text">Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailError && <p className="error-text">Email must include '@' </p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
