import { useState } from 'react'
import UserForm from './UserForm'
import RoastResult from './RoastResult'
import './App.css'

function App() {
  const [roast, setRoast] = useState('')

  return (
    <div className="App">
      <h1>LeetCode Roaster</h1>
      <UserForm setRoast={setRoast} />
      <RoastResult roast={roast} />
    </div>
  )
}

export default App