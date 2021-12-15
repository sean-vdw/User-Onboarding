import React from "react";

export default function User({ details }) {
  if (!details) {
    return <h3>Fetching User Details...</h3>
  }

  return (
    <div className='user-container'>
      <h2>{details.first_name} {details.last_name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}