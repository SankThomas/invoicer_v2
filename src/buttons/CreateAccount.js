import { useContext } from "react";
import AuthContext from "../context/auth";

export default function CreateAccount() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <button
        onClick={login}
        className="bg-blue-500 py-2 px-6 rounded text-base hover:bg-transparent text-white transition-all duration-150 hover:bg-blue-600 shadow-lg hover:ring-4 hover:ring-blue-400"
      >
        Log In or Create Account
      </button>
    </>
  );
}
