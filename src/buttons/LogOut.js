import { useContext } from "react"
import AuthContext from "../context/auth"

export default function LogOut() {
  const { logout } = useContext(AuthContext)

  return (
    <>
      <button
        onClick={logout}
        className="bg-white py-2 px-6 rounded text-base hover:bg-transparent border-2 border-white text-gray-800 transition-all duration-500 hover:opacity-75 shadow-lg hover:border-gray-800"
      >
        Log Out
      </button>
    </>
  )
}
