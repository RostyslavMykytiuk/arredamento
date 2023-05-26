import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact_container'>
      <form action="">
        <h1 className='contact_heading'>Contact</h1>
        <div className='data'>
          <input type="text" name="name" id="name" placeholder='Name'/>
          <input type="email" name="email" id="email" placeholder='Email'/>
        </div>
        <br />
        <input type="text" name="phone_number" id="phone_number" placeholder='Phone number'/>
        <br />
        <br />
        <textarea name="comment" id="comment" placeholder='Comment'></textarea>
        <br />
        <br />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact