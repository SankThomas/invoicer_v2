function App() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
              Invoicer
            </h1>
          </div>

          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button onClick={handlePrint} className="btn btn-print">
                  Print
                </button>
              </li>
              <li>
                <button className="btn btn-download">Download</button>
              </li>
              <li>
                <button className="btn btn-send">Send</button>
              </li>
            </ul>
          </div>
        </header>
        {/* End of header */}

        {/* Your details */}
        <section className="flex flex-col items-end justify-end">
          <h2 className="text-xl uppercase">Thomas Sankara</h2>
          <p>Your Address</p>
        </section>
        {/* End of your details */}

        {/* Client details */}
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client's Name</h2>
          <p>Client's address</p>
        </section>
        {/* End of client details */}

        {/* Dates */}
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li>
              <span className="font-bold">Invoicer number:</span>
            </li>
            <li>
              <span className="font-bold">Invoice date:</span>
            </li>
            <li>
              <span className="font-bold">Due date:</span>
            </li>
          </ul>
        </article>
        {/* End of dates */}

        {/* Table */}
        <div className="my-5">this is the table</div>
        {/* End of table */}

        {/* Notes */}
        <section className="mb-5">
          {/* Textarea */}
          <p>Notes to the client...</p>
        </section>
        {/* End of notes */}

        {/* Footer */}
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">Your name:</span> Thomas Sankara
            </li>
            <li>
              <span className="font-bold">Your email:</span>{" "}
              tsbsankara@gmail.com
            </li>
            <li>
              <span className="font-bold">Phone number:</span> 0712 345 678
            </li>
            <li>
              <span className="font-bold">Bank:</span> Bank Account
            </li>
            <li>
              <span className="font-bold">Account holder:</span> Thomas Sankara
            </li>
            <li>
              <span className="font-bold">Account number:</span> 123 456 789
            </li>
            <li>
              <span className="font-bold">Website:</span>{" "}
              https://tsbsankara.co.ke
            </li>
          </ul>
        </footer>
        {/* End of footer */}
      </main>
    </>
  )
}

export default App
