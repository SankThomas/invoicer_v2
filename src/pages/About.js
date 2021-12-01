import { Footer } from "./index"
import { LogIn, CreateAccount } from "../buttons"

export default function About() {
  return (
    <>
      <section className="about py-10 md:py-0">
        <div className="px-5 2xl:px-0 xl:max-w-7xl xl:mx-auto">
          <div className="overlay">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-white lg:mb-8">
              About Invoicer
            </h1>
            <p className="text-white text-center text-xl lg:w-2/3 lg:mx-auto">
              Invoicer is an Invoicing application designed and built by Thomas
              Sankara, whose main purpose is to - as the name suggests - create
              and send invoices to clients, because this is something I've
              struggled with before. I hope it helps you as well.
            </p>
            <p className="text-white text-center text-xl lg:w-2/3 lg:mx-auto mt-5">
              Please note that even though most of the functionality is done,
              there are still some things to add such as saving invoices, and
              improving the Login and Logout experience. Thank you as you bear
              with me.
            </p>
            <h3 className="text-2xl text-white mt-10 mb-5">
              Some of the known issues include:
            </h3>
            <ol className="list-decimal text-white">
              <li>
                Users needing to re-log in every time they open the application.
              </li>
              <li className="my-3">
                Sometimes users are logged in yet they don't have access to the
                application.
              </li>
              <li>The app becomes a bit unusable on small devices.</li>
            </ol>

            <ul className="md:flex items-center justify-between mt-10 xl:max-w-3xl xl:mx-auto">
              <li className="flex flex-col text-white mb-5 md:flex-row md:items-center md:mb-0 md:mr-5 lg:mr-20">
                Don't have an account? &nbsp;&nbsp; <CreateAccount />
              </li>
              <li className="flex flex-col text-white md:flex-row md:items-center">
                Already have an account? &nbsp;&nbsp; <LogIn />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
