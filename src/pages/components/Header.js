import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/auth"
import { navbar } from "../../data/data"
import { CreateAccount, DonateButton, LogOut } from "../../buttons"

export default function Header() {
  const [links] = useState(navbar)
  const { user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
    const navbar = document.querySelector(".navbar")
    const listItems = document.querySelectorAll(".list-item")

    navbar.classList.toggle("open")
    setIsOpen(!isOpen)

    listItems.forEach((item) => {
      item.addEventListener("click", () => navbar.classList.remove("open"))
      setIsOpen(false)
    })
  }

  return (
    <>
      <header className="p-5 flex items-center justify-between xl:max-w-7xl lg:mx-auto 2xl:px-0">
        <div>
          {/* <h2 className="font-bold text-4xl text-gray-800">
            <Link to="/">Invoicer</Link>
          </h2> */}
        </div>

        <nav className="navbar">
          <ul>
            {links.map(({ id, title, url }) => (
              <React.Fragment key={id}>
                <li key={id} className="list-item">
                  <Link to={url} className="text-base text-slate-700">
                    {title}
                  </Link>
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
            className="text-sm uppercase transition-all duration-500 text-slate-700"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}
