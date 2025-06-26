import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">MyApp</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
          <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;