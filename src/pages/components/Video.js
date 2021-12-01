export default function Video() {
  return (
    <>
      <section className="xl:max-w-7xl xl:mx-auto px-5 py-10 2xl:px-0">
        <div>
          <article>
            <iframe
              className="video"
              height="500"
              src="https://www.youtube.com/embed/X2z6DP0ALBk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </article>

          <article className="text-center mt-5">
            <h2 className="text-3xl lg:text-4xl mb-2">
              Watch a video demonstration of Invoicer
            </h2>
            <p className="lg:text-xl">
              I built this app on my YouTube channel. Here is the final part of
              the video. Enjoy.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
