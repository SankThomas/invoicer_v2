import { LogIn, CreateAccount } from "../../buttons"

export default function CallToAction() {
  return (
    <>
      <div className="call__to__action">
        <section className="px-5 py-10 lg:py-20">
          <div className="overlay">
            <h2 className="text-center text-white text-3xl mb-5 lg:text-5xl">
              Login or Create An Account to Get Started
            </h2>
            <p className="text-center text-white mb-10 text-xl lg:w-1/3 lg:mx-auto">
              Get started with what is about to be among your favorite apps you
              didn't think you needed.
            </p>
            <ul className="md:flex items-center justify-evenly">
              <li className="flex flex-col text-white mb-5 md:flex-row md:items-center md:mb-0">
                Don't have an account? &nbsp;&nbsp; <CreateAccount />
              </li>
              <li className="flex flex-col text-white md:flex-row md:items-center">
                Already have an account? &nbsp;&nbsp; <LogIn />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
