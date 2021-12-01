import { useState } from "react"
import { testimonials } from "../../data/data"

export default function Testimonials() {
  const [cards] = useState(testimonials)

  return (
    <>
      <section className="testimonials px-5 py-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:py-20 xl:grid-cols-3 xl:max-w-7xl xl:mx-auto 2xl:px-0">
        {cards.map(({ id, desc, name, company, image, icon }) => (
          <article key={id} className="article border-4 rounded-lg">
            <p className="pt-5 px-5">{`${desc.substring(0, 200)}...`}</p>
            <div className="content flex items-center justify-between mt-5">
              <article className="flex items-center">
                <img src={image} alt={name} title={name} className="w-16" />
                <div className="ml-5">
                  <h4 className="text-xl text-white">{name}</h4>
                  <p className="text-xl font-bold text-white">{company}</p>
                </div>
              </article>

              <article>
                <a href="https://twitter.com/tsbsankara">{icon}</a>
              </article>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
