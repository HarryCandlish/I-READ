import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Plans from './pages/plans/Plans'
import Dashboard from './pages/dashboard/Dashboard'
import NotFound from './pages/notFound/NotFound'

import Navbar from './components/Navbar'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App