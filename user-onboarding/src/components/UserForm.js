import React from "react";

export default function UserForm(props) {
  const {
    values,
    submit, 
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  } 

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (
    <form className='form-group' onSubmit={onSubmit}>
      <h2>Add User</h2>
      <div className='errors'>
        <div>{errors.firstName}</div>
        <div>{errors.lastName}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.tos}</div>
      </div>

      <div className='inputs'>
        <label>First Name
          <input 
            value={values.first_name}
            onChange={onChange}
            name='firstName'
            type='text'
          />
        </label>

        <label>Last Name
          <input 
            value={values.last_name}
            onChange={onChange}
            name='lastName'
            type='text'
          />
        </label>

        <label>Email
          <input 
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>

        <label>Password
          <input 
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Terms of Service
          <input 
            value={values.tos}
            onChange={onChange}
            name='tos'
            type='checkbox'
          />
        </label>
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  )
}