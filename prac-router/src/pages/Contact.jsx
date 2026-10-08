
import {Link, Outlet} from 'react-router-dom'
const Contact = () => {
  return (
    <>
      <nav className="flex gap-6 p-4 bg-gray-800 text-white">
        <Link to="men">Contact Men</Link>
        <Link to="women">Contact Women</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default Contact