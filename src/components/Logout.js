import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CgSmileSad } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

export default function Logout({ setShowLogoutModal, logout }) {
  return (
    <div className="transition-all duration-200 bg-black bg-opacity-75 fixed left-0 right-0 bottom-0 top-0 z-20">
      <div className="w-9/12 max-w-2xl bg-white p-8 rounded shadow fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl">Confirm Logout</h2>
          <button
            onClick={() => setShowLogoutModal(false)}
            className="hover:bg-slate-200 p-2 rounded-full transition-all duration-150"
          >
            <GrClose className="text-2xl text-slate-600" />
          </button>
        </div>
        <p className="text-slate-600 mb-10">
          You are about to log out. Are you sure?
        </p>

        <ul className="flex flex-wrap gap-6 items-start md:items-start justify-between">
          <li>
            <button
              onClick={() => setShowLogoutModal(false)}
              className="flex items-center justify-center gap-2 bg-emerald-500 py-2 px-4 rounded text-white hover:ring-4 hover:ring-emerald-300 hover:bg-emerald-600 transition-all duration-150"
            >
              No, take me back <BsEmojiSmile className="text-xl" />
            </button>
          </li>
          <li>
            <button
              onClick={logout}
              className="flex items-center justify-start md:justify-center gap-2 bg-red-500 py-2 px-4 rounded text-white hover:ring-4 hover:ring-red-300 hover:bg-red-600 transition-all duration-150"
            >
              Yes, Logout <CgSmileSad className="text-2xl" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
