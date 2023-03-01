import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Profile() {

  const { user, setUser } = useAuth()

  const logoutHandle = () => {
    setUser(false)
  }

  return (
    <div>
      <Helmet>
        <title>Profil</title>
      </Helmet>
      Profile <br />
      {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
      {!user && <Link to="/auth/login">Giriş Yap</Link>}
    </div>
  )
}
