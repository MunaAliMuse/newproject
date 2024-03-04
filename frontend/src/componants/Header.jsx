import { useState } from "react"
import { Link } from "react-router-dom"
function Header() {

  const [isOpen, setisOpen] = useState(false)
  const handleisOpen = () => {
    setisOpen(true)
  }
  const handleClose = () => {
    setisOpen(false)
  }

  const userName = localStorage.getItem("user")
  const logout = () => {
    localStorage.clear()
  }

  return <div>
    <div className="flex justify-between bg-white p-3 shadow-xl shadow-white ">
      <h1 className="text-3xl pt-4 font-bold text-black">Xijaabo</h1>
      <ul className="flex gap-20 text-xl pt-5 text-black">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"} >About</Link >
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Courcess"}>Courcess</Link>
      </ul>
      {
        userName ? <div className="flex gap-5 items-center pt-5">
          <div className="bg-green-300 w-10 h-10 rounded-full">
            <h1 className='text-3xl font-bold pl-2'>{JSON.parse(userName).name[0]}</h1>
          </div>
          <Link className="px-6 py-2 rounded-lg text-white bg-green-500" to="/login" onClick={logout}>Logout</Link>
        </div>
          :
          <div className="flex gap-5">
            <Link to={"/Register"} className="px-6 py-2 mt-4 rounded-lg text-white bg-green-500">Register</Link>
            <Link to={"/Login"} className="px-6 py-2 mt-4 rounded-lg text-white bg-green-500">Login</Link  >
          </div>
      }
    </div>
  </div>
}

export default Header