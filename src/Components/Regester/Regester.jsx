import React, { useState } from 'react'

import joi from 'joi'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Regester() {
  let navigate = useNavigate()
  const [error, setError] = useState('');
  const [errorList, setErrorList] = useState([])
  const [loading, setLoading] = useState(false)


  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: ''
  });


  function getUserData(e) {
    const myUser = { ...user }
    myUser[e.target.name] = e.target.value
    setUser(myUser)
  }

  async function sendUserData() {
    await axios.post(`https://userapi-haj1.onrender.com/signup`, user).then((data) => {
      navigate('/login')
      setLoading(false)
    
    
    }).catch((err) => {

      setLoading(false)
      setError(err.response.data.error)
   

    })

  }

  function submitRegister(e) {
    e.preventDefault()
    setLoading(true)

    let validation = validationReg()
    if (validation.error) {
      setErrorList(validation.error.details)
      setLoading(false)
    }
    else {
      sendUserData()
    }
  }

  function validationReg() {

    let scheme = joi.object({
      first_name: joi.string().min(3).max(8).required(),
      last_name: joi.string().min(3).max(8).required(),
      age: joi.number().min(16).max(80).required(),
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().pattern(/^[A-Z][a-z0-9]{3,8}$/).required(),

    })

    return scheme.validate(user, { abortEarly: false })

  }


  return <div className="w-25 mx-auto py-3 ">

    <h3 className="my-4  shadow p-3 mb-5 rounded-4 text-center"> REGISTRATION </h3>

    {error ? <p className='text-danger '>{error}</p> : ''}


    <form className='my-5' onSubmit={submitRegister}>
      
<div className='row'>
  <div className="col-md-6">
      <input onChange={getUserData} type="text" className='form-control myInput mb-2 my-2 ' name='first_name' id='first_name' placeholder='First-Name' />
      <p className='text-danger'>{errorList.filter((error) => error.context.label === 'first_name')[0]?.message}</p></div>
  <div className="col-md-6">  
      <input onChange={getUserData} type="text" className='form-control myInput mb-2 my-2 ' name='last_name' id='last_name' placeholder='Last-Name'/>
      <p className='text-danger'>{errorList.filter((error) => error.context.label === 'last_name')[0]?.message}</p></div>
</div>
   
      <input onChange={getUserData} type="number " className='form-control myInput mb-2 my-2 ' name='age' id='age'placeholder='Age' />
      <p className='text-danger'>{errorList.filter((error) => error.context.label === 'age')[0]?.message}</p>
      <input onChange={getUserData} type="email" className='form-control myInput mb-2 my-2 ' name='email' id='email'placeholder='Email' />
      <p className='text-danger'>{errorList.filter((error) => error.context.label === 'email')[0]?.message}</p>
      <input onChange={getUserData} type="password" className='form-control myInput mb-2 my-2 ' name='password' id='password' placeholder='Password' />
      <p className='text-danger'>{errorList.filter((error) => error.context.label === 'password')[0]?.message}</p>

      <button type='submit' className="btn bag-primary mb-2 ">
        {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
      </button>


    </form>
  </div>
}
