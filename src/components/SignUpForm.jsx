"use client"

import { useState } from "react"
import {Link} from "react-router-dom"

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")

//     if (password !== confirmPassword) {
//       setError("Passwords do not match")
//       return
//     }

//     setLoading(true)

//     try {
//       // Here you would typically call your authentication API
//       console.log("Signing up with:", email, password)

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000))

//       // Redirect or show success message
//       alert("Sign up successful!")
//     } catch (err) {
//       setError("Failed to create account. Please try again.")
//     } finally {
//       setLoading(false)
//     }

//     if(email, password === ""){
//         alert('fill the content')

//     }
//   }

  return (
    <div className="signup-container flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form className="signup-form w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Sign Up</h2>

        <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
          Email:
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </label>

        <label htmlFor="password" className="mb-6 mt-4 block font-medium text-gray-700">
          Password:
          <input
            id="password"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </label>
        <label htmlFor="confirmPassword" className="mb-6 mt-4 block font-medium text-gray-700">
          Confirm Password:
          <input
            id="confirmPassword"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </label>

        <button
          type="submit"
          className={`w-full rounded-md bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          }`}
        >
            Submit
        </button>

        {error && (
          <div className="rounded-md bg-red-50 p-4 mt-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800"></h3>
              </div>
            </div>
          </div>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Already Registered?{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignUpForm

