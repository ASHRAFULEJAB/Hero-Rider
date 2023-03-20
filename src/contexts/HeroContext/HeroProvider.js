import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import app from '../../firebase/firebaseConfig'

const auth = getAuth(app)

export const UserAuthContext = createContext()
const HeroProvider = ({ children }) => {
  const [heroUser, setHeroUser] = useState(null)
  const [loader, setLoader] = useState(true)

  const SignUp = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const heroUserLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const userGoogleLogin = (provider) => {
    setLoader(true)
    return signInWithPopup(auth, provider)
  }
  const updateHeroUserProfile = (profile) => {
    setLoader(true)
    return updateProfile(auth.currentUser, profile)
  }
  const heroUserLogout = () => {
    setLoader(false)
    localStorage.removeItem('token')
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setHeroUser(currentUser)

      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const HeroInfo = {
    loader,
    heroUser,
    setLoader,
    SignUp,
    heroUserLogin,
    heroUserLogout,
    userGoogleLogin,
    updateHeroUserProfile,
  }

  return (
    <UserAuthContext.Provider value={HeroInfo}>
      {children}
    </UserAuthContext.Provider>
  );
}

export default HeroProvider
