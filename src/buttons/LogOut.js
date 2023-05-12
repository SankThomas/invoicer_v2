import { useContext } from "react";
import Logout from "../components/Logout";
import { State } from "../context/stateContext";

export default function LogOut() {
  const { showLogoutModal, setShowLogoutModal } = useContext(State);

  return (
    <>
      <button
        onClick={() => setShowLogoutModal(true)}
        className="bg-white py-2 px-6 rounded text-base hover:bg-gray-800 text-gray-800 transition-all duration-150 hover:text-white hover:ring-4 hover:ring-gray-400"
      >
        Log Out
      </button>

      {/* Logout component modal */}
      {showLogoutModal && <Logout />}
    </>
  );
}
