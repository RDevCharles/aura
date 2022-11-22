import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserAuth from "./pages/UserAuth";
import AdminDashboard from "./pages/AdminDashboard";
import { getUser } from "./utils/users-service";
import Issues from "./pages/Issues";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
     
      <Routes>
        <Route
          path="/"
          element={
            user ? <AdminDashboard /> : <UserAuth setUser={setUser} />
          }
        />
        <Route path="/issues" element={<Issues/>} />
      </Routes>

      
    </div>
  );
}

export default App;
