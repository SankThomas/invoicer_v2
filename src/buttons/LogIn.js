import { useContext } from "react"
import AuthContext from "../context/auth"

export default function LogIn() {
  const { login } = useContext(AuthContext)

  return (
    <>
      <button
        onClick={login}
        className="bg-white py-2 px-6 rounded font-bold hover:bg-transparent border-2 border-white text-gray-800 transition-all duration-500 hover:opacity-75 shadow-lg hover:text-white"
      >
        Log In
      </button>
    </>
  )
}
