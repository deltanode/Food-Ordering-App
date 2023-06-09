import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"
import { Header } from "./components"
import "./index.css"

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appLayout} />
  </React.StrictMode>
)
