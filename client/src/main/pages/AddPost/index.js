import React, { useState } from 'react'
import { TextInput, Button } from 'react-native'
import TopBanner from '../../components/TopBanner'
import Sidebar from '../../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister, selectIsAuth } from '../../../redux/slices/auth'
import { Navigate } from 'react-router-dom'

export default function AddPost() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()

  async function onSubmit (e) {
    e.preventDefault
    const values = {
      name,
      email,
      password
    }
    const data = await dispatch(fetchRegister(values))

    if (!data.payload) {
      return alert('Не удалось зарегистрироваться')
    }

    // если авторизация прошла успешно, то сохраняем в локалсторадж наш токен, по которому
    // мы потом будем проверять авторизацию
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    } 
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <>
      <TopBanner />

      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8  mb-5 mb-lg-0">
              <div className="content mb-5">
                <h2 id="we-would-love-to-hear-from-you">We would Love To Hear From You&hellip;.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa vitae felis augue. In venenatis scelerisque accumsan egestas mattis. Massa feugiat in sem pellentesque.</p>
              </div>
        
              <form method="POST" action="#">
                <div className="form-group">
                  <label for="name">Your Name (Required)</label>
                  <TextInput 
                    type="text" 
                    onChangeText={(v) => setName(v)}
                    value={name}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Your Email Address (Required)</label>
                  <TextInput 
                    type="email" 
                    onChangeText={(v) => setEmail(v)}
                    value={email}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Password</label>
                  <TextInput 
                    type="password" 
                    onChangeText={(v) => setPassword(v)}
                    value={password}
                    placeholder="Your Password"
                  />
                </div>
                <Button title='Send now' className="btn btn-primary" onPress={onSubmit} />
              </form>

            </div>
            
            <Sidebar />
            
          </div>
        </div>
      </section>
    </>
  )
}

