import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Layout from './component/Layout/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Github,{githubInfoLoader} from './component/Github/Github.jsx'

// const router = createBrowserRouter([
//  {
//    path: "/",
//    element: <Layout />,
//    children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     },
//     {
//       path: "github",
//       element: <Github />
//     }
//    ]

// }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github"
      loader={githubInfoLoader}
       element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
