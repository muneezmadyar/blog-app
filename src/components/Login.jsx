"use client"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../Firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      alert("Please fill all the inputs")
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert("Login successfully")
      // Redirect to home page
      navigate("/")
    } catch (err) {
      console.log(err)
      setError("Failed to login. Please check your email and password.")
    }
  }

  return (
    <div className="login-container flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form className="login-form w-full max-w-md rounded-lg bg-white p-8 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>

        <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
          Email:
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password" className="mb-6 mt-4 block font-medium text-gray-700">
          Password:
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {error && <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-800">{error}</div>}

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/sign" className="text-blue-600 hover:text-blue-800">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login

