import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/auth"
import { navbar } from "../../data/data"
import { FaBars } from "react-icons/fa"
import { CreateAccount, DonateButton, LogOut } from "../../buttons"

export default function Header() {
  const [links] = useState(navbar)
  const { user } = useContext(AuthContext)

  const handleClick = () => {
    const navbar = document.querySelector(".navbar")
    const listItems = document.querySelectorAll(".list-item")

    navbar.classList.toggle("open")

    listItems.forEach((item) =>
      item.addEventListener("click", () => navbar.classList.remove("open"))
    )
  }

  return (
    <>
      <header className="p-5 flex items-center justify-between xl:max-w-7xl lg:mx-auto 2xl:px-0">
        <div>
          <h2 className="font-bold text-4xl text-gray-800">
            <Link to="/">Invoicer</Link>
          </h2>
        </div>

        <nav className="navbar">
          <ul>
            {links.map(({ id, title, url }) => (
              <React.Fragment key={id}>
                <li key={id} className="list-item">
                  <Link to={url}>{title}</Link>
                </li>
              </React.Fragment>
            ))}

            <li>{user ? <LogOut /> : <CreateAccount />}</li>
            <li>
              <DonateButton />
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={handleClick}
            className="bg-blue-500 p-2 rounded hover:bg-blue-800 transition-all duration-500 hover:opacity-75"
          >
            <FaBars className="text-2xl text-white" />
          </button>
        </div>
      </header>
    </>
  )
}
