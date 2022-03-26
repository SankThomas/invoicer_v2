import { LogIn, CreateAccount } from "../../buttons"

export default function CallToAction() {
  return (
    <>
      <div className="bg-teal-200 py-10 lg:py-32">
        <section className="max-width">
          <div className="md:grid grid-cols-2 gap-10 md:place-items-center">
            <article>
              <h2 className="text-slate-800 font-bold text-3xl md:text-4xl mb-5">
                Login or Create An Account to Get Started
              </h2>
              <p className="mb-10 text-slate-700">
                No credit cards, no subscriptions! Simply create an account and
                begin creating invoices for your clients.
              </p>
            </article>

            <article>
              <ul className="flex items-center justify-center">
                <li className="mr-3">
                  <CreateAccount />
                </li>
                <li className="">
                  <LogIn />
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>

      <div className="slant-left"></div>
    </>
  )
}
