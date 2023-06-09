import style from "./style"
import { Outlet } from "react-router"
import { Header } from "./components"

function App() {
  return (
    <div className="w-full font-figtree ">
      <div className={`${style.flexStart} shadow-md fixed w-full`}>
        <div className={`${style.boxWidth}`}>
          <Header />
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default App
