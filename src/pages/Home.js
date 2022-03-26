import { CreateAccount, LogIn } from "../buttons"
import hero from "../images/invoicerv2.png"

export default function Home() {
  return (
    <>
      <section className="max-width">
        <section className="py-10 lg:py-32">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center md:gap-10 lg:gap-20">
            <article>
              <h1 className="text-slate-700 mb-5 text-4xl md:text-5xl font-bold text-center md:text-left">
                Create invoices with Invoicer
              </h1>
              <article className="md:hidden">
                <img
                  src={hero}
                  alt="Create Invoices Easily"
                  title="Create Invoices Easily"
                  className="block mx-auto rounded"
                />
              </article>
              <p className="text-slate-700 mt-5 md:mt-0 mb-5 text-center md:text-left">
                Easily create, download and print invoices for your clients. No
                more unsurety, just Invoicer It!
              </p>

              <ul className="flex flex-wrap items-center justify-center md:justify-start">
                <li className="mr-3">
                  <CreateAccount />
                </li>
                <li>
                  <LogIn />
                </li>
              </ul>

              <div>
                <p className="text-slate-700 mt-5 text-center md:text-left">
                  Do you like Invoicer? Check out my other app called{" "}
                  <a
                    href="https://diarry.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-slate-700"
                  >
                    Diarry
                  </a>
                </p>
              </div>
            </article>

            <article className="hidden md:block">
              <img
                src={hero}
                alt="Create Invoices Easily"
                title="Create Invoices Easily"
                className="rounded"
              />
            </article>
          </div>
        </section>
      </section>

      <div className="slant"></div>
    </>
  )
}
