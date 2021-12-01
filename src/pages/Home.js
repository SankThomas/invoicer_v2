import { CreateAccount, LogIn } from "../buttons"
import hero from "../images/invoicerv2.png"

export default function Home() {
  return (
    <section className="home">
      <section className="px-5 2xl:px-0 xl:max-w-7xl xl:mx-auto py-10">
        <div className="overlay grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-center xl:px-0">
          <article>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center lg:text-left mb-3 text-white">
              Create invoices easily
            </h1>
            <p className="text-center lg:text-left text-xl mt-5 mb-10 text-white">
              Easily create, download and print invoices for your clients. No
              more unsurety, just Invoicer It!
            </p>

            <ul className="flex flex-wrap items-center justify-center lg:items-start lg:justify-start mt-5">
              <li className="mr-5">
                <CreateAccount />
              </li>
              <li>
                <LogIn />
              </li>
              <li></li>
            </ul>
          </article>

          <article>
            <img
              src={hero}
              alt="Create Invoices Easily"
              title="Create Invoices Easily"
              className="shadow rounded"
            />
          </article>
        </div>
      </section>
    </section>
  )
}
