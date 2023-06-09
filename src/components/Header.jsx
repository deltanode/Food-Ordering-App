import { useState } from "react"
import { Link } from "react-router-dom"
import style from "../style"
import { SWIGGY_LOGO } from "../utils/constant"
import { navLinks, menuIcons } from "../utils/layout"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const { Menu, Close } = menuIcons
  return (
    <nav className={`flex justify-between items-center py-3 ${style.paddingX}`}>
      <img className="w-[150px] " src={SWIGGY_LOGO} alt="logo" />
      {/* Web View */}
      <ul className="list-none hidden lg:flex gap-6 lg:gap-14">
        {navLinks.map(navLink => {
          return (
            <li key={navLink.name} className="text-[17px] capitalize text-primary font-semibold">
              <Link to={navLink.name} className="flex items-center gap-1">
                <navLink.icon />
                <span>{navLink.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile View */}
      <div className="lg:hidden">
        <div onClick={() => setToggle(prev => !prev)} className="relative">
          {!toggle ? <Menu size={30} /> : <Close size={35} />}

          <div className={`${!toggle ? "hidden" : "block"}  absolute top-[70px] right-0 shadow-xl p-6 border`}>
            <ul className="list-none flex flex-col items-start gap-6">
              {navLinks.map(navLink => {
                return (
                  <li key={navLink.name} className="text-[17px] capitalize text-primary font-semibold border-b px-6 ">
                    <Link to={navLink.name} className="flex items-center gap-1">
                      <navLink.icon />
                      <span>{navLink.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
