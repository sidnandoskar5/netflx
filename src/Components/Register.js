import React from 'react'

function Register() {
  return (
    <div className='register-user'>
        <form className='register-user__form'>
            <p className='heading'>Register</p>
            <div className='form-group'>
                <div className='form-el'>
                    <label for='first-name'>First Name</label>
                    <input type='text' id='first-name' />
                </div>
                <div className='form-el'>
                    <label for='last-name'>Last Name</label>
                    <input type='text' id='last-name' />
                </div>
                <div className='form-el'>
                    <label for='last-name'>Email</label>
                    <input type='email' id='last-name' />
                </div>
                <div className='form-el'>
                    <label for='pass'>Password</label>
                    <input type='password' id='pass' />
                </div>
                <button className='reg_form_submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register