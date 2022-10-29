import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import UserAuth from "./pages/UserAuth";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { getUser } from "./utils/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  
  const navigate = useNavigate();

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
          path="/settings"
          element={<Settings user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
