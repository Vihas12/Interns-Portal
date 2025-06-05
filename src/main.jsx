import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider  
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Internship from './pages/Internship.jsx'
import Internshipdetail from './pages/Internshipdetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/internships' element={<Internship />} />
      {/* This is dynamic routing which takes id as a parameter and passes it to Internshipdetail */}
      <Route path='/internship/:id' element={<Internshipdetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
