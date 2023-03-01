import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Profile() {

  const { user, setUser } = useAuth()

  const logoutHandle = () => {
    setUser(false)
  }

  return (
    <div>
      Profile <br />
      {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
      {!user && <Link to="/auth/login">Giriş Yap</Link>}
    </div>
  )
}
