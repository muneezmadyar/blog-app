"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Sec2 from "./components/Sec2"
import Post from "./components/Post"
import Kamblogs from "./components/Kamblogs"
import Game from "./components/Game"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SignUpForm from "./components/SignUpForm"
// import Login from "./components/Login"
import CreateBlog from "./components/CreateBlog"
import { auth } from "./Firebase"
import { useEffect, useState } from "react"
import Login from "./components/login"

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return user ? children : <Navigate to="/login" />
}

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Sec2 />
              <Post />
              <Kamblogs />
              <Game />
              <Footer />
            </>
          }
        />

        {/* Blog route */}
        <Route path="/blog" element={<Blog />} />

        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />

        {/* Auth routes */}
        <Route path="/sign" element={<SignUpForm />} />
        <Route path="/login" element={<Login/>} />

        {/* Protected Create Blog Route */}
        <Route
          path="/create-blog"
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App

