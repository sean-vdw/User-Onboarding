import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

import schema from './validate/formSchema';
import UserForm from './components/UserForm';
import User from './components/User';

// Initial States
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}
const initialUsers = []
const initialDisabled = true

function App() {
  // States
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // Helpers
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  // Event Handlers
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: formValues.tos,
    }
    postNewUser(newUser);
  }

  // Side Effects
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">

    </div>
  );
}

export default App;
