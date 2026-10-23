import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Computers, Desktop, Laptop, Mobile } from './Computers'
import Home from './Home'
import './index.css'

function Main() {
  return (
    <BrowserRouter>
      <div className="Navigation">
        <Suspense fallback={<div>Be patient, the website is loading...</div>}>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/computers">My Computers</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/computers" element={<Computers />}>
              <Route path="desktops" element={<Desktop />} />
              <Route path="laptops" element={<Laptop />} />
              <Route path="phones&pdas" element={<Mobile />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <Main />
);