import { Link } from "react-router-dom";
import { logout } from "../utils/users-service";
import useSound from 'use-sound';
const NavBar = () => {
  return (
    <nav class="bg-gray-800">
      <div class="flex space-x-4">
        <Link
          class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          to="/games"
        >
          Dashboard
        </Link>

        <Link
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          to="/store"
        >
          Games
        </Link>
        <Link
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          to="/my-games"
        >
          Store
        </Link>
        <Link
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          to="/profile"
        >
          Settings
        </Link>
        <Link
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          to="/"
          onClick={() => {
            logout();
            window.location.reload(false);
          }}
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
