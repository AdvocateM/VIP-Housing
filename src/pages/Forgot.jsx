import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

function Forgot() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const onChange = (e) => setEmail(e.target.value)
  const onSubmit = async e => {
    e.preventDefault()

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email Was Sent")
      navigate('/sign_in')
    } catch (error) {
      toast.error("Could not Send Rest Email")
    }
  }



  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input type='email' id='email' className="emailInput" value={email} onChange={onChange} />
          <Link className='forgotPasswordLink' to='/sign_in'>Sign In</Link>

          <div className="signInBar">
            <div className='signInText'>Send Rest Link</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Forgot
