import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import DefContact from './pages/DefContact'
import ContactMen from './pages/ContactMen'
import ContactWomen from './pages/ContactWomen'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='contact' element={<Contact/>}>
        <Route index element={<DefContact/>}/>
        <Route path='men' element={<ContactMen/>}/>
        <Route path='women' element={<ContactWomen/>}/>
        </Route>
      </Routes>
      </div>
  )
}

export default App