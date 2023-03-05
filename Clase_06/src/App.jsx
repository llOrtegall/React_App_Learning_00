import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Landing, Admin, Analytics, Dashboard, Home } from './Pages/index'

export function App () {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation () {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/landing'>Landing</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/analytics'>Analytics</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}
