import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/userList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <h1 className='font-bold text-4xl my-2'>Vite + React</h1>
      <h2 className='font-bold text-3xl my-2'>Products</h2>
      <UserList>
      </UserList>
    </>
  )
}

export default App
