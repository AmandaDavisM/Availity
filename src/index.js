import React from "react";
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import './index.css';


const Registration = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(errors);
    console.log(values);
    setFormData(values);
    setSubmitted(true);
  };

  if(!submitted){
  return (
    <>    
    <div class="center">
    <h3 class="h3CenterS">Welcome to the Availity Portal! Please register below</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="settings">
    <label>First Name:  <span class="error">{errors.firstName && errors.firstName.message}</span></label>
      <input
        name="firstName"
        ref={register({
          required: "Required"
        })}
      />
      <label>Last Name: <span class="error">{errors.lastName && errors.lastName.message}</span></label>
      <input
        name="lastName"
        ref={register({
          required: "Required"
        })}
      />
      <label>NPI Number:  <span class="error">{errors.npiNumber && errors.npiNumber.message}</span></label>
      <input
        name="npiNumber"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[0-9]*$/i,
            message: "invalid number"
          }
        })}
      />
      <label>Business Address:  <span class="error">{errors.address && errors.address.message}</span></label>
      <input
        name="address"
        ref={register({
          required: "Required"
        })}
      />
      <label>Telephone:  <span class="error">{errors.telephone && errors.telephone.message}</span></label>
      <input
        name="telephone"
        ref={register({
          required: "Required",
          pattern: {
            value:  /^[0-9]*$/i,
            message: "invalid phone Number"
          }
        })}
      />
      <label>Email:  <span class="error">{errors.email && errors.email.message}</span></label>
      <input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      </div>
      <button class="submitButton" type="submit" >Submit</button>
    </form>
    </div>
    </>
  );
  }else{
    return(
      <>
          <div class="center">{submitted ? `Thanks for registering, ${formData.firstName}! ` : ''}
          <br/>
          <button class="submitButton" onClick={()=>setSubmitted(false)}>Back to Register</button>
          </div>
    </>

    );
  }

};

ReactDOM.render(
  <Registration />,
  document.getElementById('root')
);