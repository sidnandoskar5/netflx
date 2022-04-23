import React from 'react'

function SignIn() {
  return (
    <div className='sign-in-user'>
        <form className='sign-in-user__form'>
            <p className='heading'>Sign In</p>
            <div className='form-group'>
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

export default SignIn