
import { useState } from 'react';
import './App.css';
import FormInput from './component/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword:""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters ans shouldn't inculde any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label:"Username"
      
  
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it should be valid email address",
      label: "Email",
      required: true


    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required:true

    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character ",
      label: "Password",
      pattern:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}",
      required: true


    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "ConfirmPassword",
      required: true,
      pattern:values.password


    }

  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  
  const onChange = (e) => {
  setValues({...values,[e.target.name]:e.target.value})
}
 console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
           <h1>Register</h1>
        {
          inputs.map((input) => (
            <FormInput
              key={input.id}
               {...input}
              value={values[input.name]}
              onChange={onChange} />
          ))
        }
        <button>Sutmit</button>
      </form>
      
      
    </div>
  );
}

export default App;
