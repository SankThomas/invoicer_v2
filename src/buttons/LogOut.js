import { useContext, useState } from "react";
import AuthContext from "../context/auth";
import Logout from "../components/Logout";

export default function LogOut() {
  const { logout } = useContext(AuthContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowLogoutModal(true)}
        className="bg-white py-2 px-6 rounded text-base hover:bg-gray-800 text-gray-800 transition-all duration-150 hover:text-white hover:ring-4 hover:ring-gray-400"
      >
        Log Out
      </button>

      {/* Logout component modal */}
      {showLogoutModal && (
        <Logout logout={logout} setShowLogoutModal={setShowLogoutModal} />
      )}
    </>
  );
}
