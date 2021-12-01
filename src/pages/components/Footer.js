import { Link } from "react-router-dom"
import { CreateAccount, LogIn } from "../../buttons"

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <footer className="flex flex-col items-center justify-center flex-wrap md:grid md:grid-cols-2 px-5 py-10 xl:max-w-7xl xl:mx-auto text-center md:text-left md:items-center lg:grid-cols-3">
        <div>
          <h2 className="text-white text-3xl mb-10 lg:mb-0">Invoicer</h2>
        </div>

        <ul className="mb-10 lg:mb-0 lg:flex">
          <li>
            <Link to="/about" className="text-white">
              About Invoicer
            </Link>
          </li>
          <li className="my-3 lg:mx-5 lg:my-0">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="suggestion-box" className="text-white">
              Suggestion Box
            </Link>
          </li>
        </ul>

        <ul className="flex flex-wrap">
          <li className="mr-5 mb-3 md:mb-0">
            <CreateAccount />
          </li>
          <li>
            <LogIn />
          </li>
        </ul>
      </footer>
      <p className="pb-5 text-white text-center">
        Built by{" "}
        <a
          href="https://tsbsankara.netlify.app"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Thomas Sankara
        </a>
      </p>
    </div>
  )
}
