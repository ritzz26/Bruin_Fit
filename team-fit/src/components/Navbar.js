import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold">
          Team Fit
        </Link>
        <div>
          <Link
            to="/login"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
