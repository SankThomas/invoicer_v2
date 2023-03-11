import { useContext } from "react";
import AuthContext from "../context/auth";

export default function CreateAccount() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <button
        onClick={login}
        className="bg-blue-500 py-2 px-6 rounded text-base hover:bg-transparent border-2 border-blue-500 text-white transition-all duration-500 hover:opacity-75 hover:bg-blue-800 hover:border-blue-800 shadow-lg"
      >
        Log In or Create Account
      </button>
    </>
  );
}
