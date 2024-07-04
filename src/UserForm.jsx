import { useState } from 'react'
import axios from 'axios'

function UserForm({ setRoast }) {
  const [username, setUsername] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const lr = await axios.post('https://leetcode-roaster-backend.onrender.com/user/leets', { username })
      
      const matchedUser = lr.data.message.matchedUser

      const roastPayload = {
        username: matchedUser.username,
        profile: matchedUser.profile,
        submitStats: matchedUser.submitStats,
        userCalendar: matchedUser.userCalendar,
        badges: matchedUser.badges,
        upcomingBadges: matchedUser.upcomingBadges
      }

   

      const rr = await axios.post('https://leetcode-roaster-backend.onrender.com/user/roast', roastPayload)
    
      setRoast(rr.data.data)
    } catch (error) {
      console.error('err:', error)
      setRoast('dsa so bad even the roaster refused to roast')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username dedo"
        required
      />
      <button type="submit">Get Roasted</button>
    </form>
  )
}

export default UserForm