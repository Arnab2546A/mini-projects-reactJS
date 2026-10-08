
import {Link} from  'react-router-dom'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
  <div className="text-xl font-bold">My Website</div>

  <div className="flex gap-6">
    <Link to='/'>Home</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/about'>About Us</Link>
  </div>
</nav>
  )
}

export default Navbar