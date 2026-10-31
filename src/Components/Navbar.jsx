import currency from "../assets/Currency.png"
function Navbar() {
  return (
  <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Sports-App</a>
  </div>
  <div className="flex-none">
    <button className="flex justify-between items-center gap-2 font-bold text-xl">
        0 Coins
<img src={currency} alt="" />
    </button>
  </div>
</div>
  )
}

export default Navbar