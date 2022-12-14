import "./App.css";
import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import UserAuth from "./pages/UserAuth";
import Dashboard from "./pages/Dashboard";
import Games from "./pages/Games";
import GameDetail from "./pages/GameDetail"
import ProfileSettings from "./pages/ProfileSettings";
import { getUser } from "./utils/users-service";


function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Dashboard user={user} />
            ) : (
              <UserAuth setUser={setUser}  />
            )
          }
        />
        <Route
          path="/profile-settings"
          element={<ProfileSettings user={user} />}
        />
        <Route
          path="/games"
          element={<Games user={user} />}
        />
        <Route
          path="/games/:id/"
          element={<GameDetail user={user} />}/>
      </Routes>
    </div>
  );
}

export default App;
