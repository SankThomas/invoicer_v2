export default function DonateButton() {
  return (
    <>
      {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="UCXYN5VX4FMPE" />
        <button className="bg-red-500 py-2 px-6 rounded font-bold hover:bg-transparent border-2 border-red-500 text-white transition-all duration-500 hover:opacity-75 hover:bg-red-500 hover:border-red-500 shadow-lg">
          Donate
        </button>
      </form> */}
      <a href="https://patreon.com/tsbsankara" target="_blank" rel="noreferrer">
        <button className="bg-red-500 py-2 px-6 rounded text-base hover:bg-transparent border-2 border-red-500 text-white transition-all duration-500 hover:opacity-75 hover:bg-red-500 hover:border-red-500 shadow-lg flex items-center">
          Support Me On Patreon
        </button>
      </a>
    </>
  )
}
