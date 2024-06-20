import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const reset = () => {
    setEmail('')
    setPassword('')
  }

  const login = async () => {
    const data = await axios.post('/auth/login', {email: email, password:password})
    console.log(data);
    reset()
  }
  const create = async () => {
    const data = await axios.post('/user/create', {title: email, content:password})
    console.log(data);
    reset()
  }

  const reply = async () => {
    const data = await axios.post('/user/reply', {discussionId: email, content:password})
    console.log(data);
    reset()
  }

  const like = async () => {
    const data = await axios.post('/user/like', {discussionId: email})
    console.log(data);
    reset()
  }

  const myDiscussion = async () => {
    const data = await axios.post('/user/discussion')
    console.log(data);
    reset()
  }
  
  const close = async () => {
    const data = await axios.post('/admin/close', {discussionId: email})
    console.log(data);
    reset()
  }

  const block = async () => {
    const data = await axios.post('/admin/block', {userId: email})
    console.log(data);
    reset()
  }

  const getUsers = async () => {
    const data = await axios.post('/admin/allUsers')
    console.log(data);
    reset()
  }

  return (
    <>
    <div>

      <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>login</button>
    </div>

      <div>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={create}>create</button>
      </div>

      <div>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={reply}>reply</button>
      </div>

      <div>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <button onClick={like}>like</button>
      </div>

      <div>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <button onClick={myDiscussion}>get discussion</button>
      </div>

      <div>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <button onClick={close}>close</button>
      </div>

      <div>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <button onClick={block}>block</button>
      </div>

      <div>
      {/* <input type="text" value={email} onChange={e => setEmail(e.target.value)}/> */}
        <button onClick={getUsers}>get users</button>
      </div>

    </>
  )
}

export default App
