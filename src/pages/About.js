import { Footer } from "./index"
import { LogIn, CreateAccount } from "../buttons"

export default function About() {
  return (
    <>
      <section className="bg-teal-200 py-10 lg:py-32 ">
        <div className="max-width">
          <div className="overlay">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-slate-800 lg:mb-8">
              About Invoicer
            </h1>
            <p className="text-slate-700 text-center text-xl lg:w-2/3 lg:mx-auto">
              Invoicer is an Invoicing application designed and built by Thomas
              Sankara, whose main purpose is to - as the name suggests - create
              and send invoices to clients, because this is something I've
              struggled with before. I hope it helps you as well.
            </p>
            <p className="text-slate-700 text-center text-xl lg:w-2/3 lg:mx-auto mt-5">
              Please note that even though most of the functionality is done,
              there are still some things to add such as saving invoices, and
              improving the Login and Logout experience. Thank you as you bear
              with me.
            </p>

            <div className="lg:max-w-2xl lg:mx-auto">
              <h3 className="text-2xl text-slate-800 mt-10 mb-5">
                Some of the known issues include:
              </h3>
              <ol className="list-decimal text-slate-700">
                <li>
                  Users needing to re-log in every time they open the
                  application. - FIXED!!!
                </li>
                <li className="my-3">
                  Sometimes users are logged in yet they don't have access to
                  the application. - FIXED!!!
                </li>
                <li className="mb-3">
                  The app becomes a bit unusable on small devices. - FIXED!!!
                </li>
                <li>
                  Redirects not working properly when logging in from pages
                  other than the homepage
                </li>
              </ol>
            </div>

            <ul className="md:flex items-center justify-center mt-10 xl:max-w-3xl xl:mx-auto">
              <li className="flex flex-col text-slate-700 mb-5 md:flex-row md:items-center md:mb-0 md:mr-5">
                <CreateAccount />
              </li>
              <li className="flex flex-col text-slate-700 md:flex-row md:items-center">
                <LogIn />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="slant-left"></div>
      <Footer />
    </>
  )
}
