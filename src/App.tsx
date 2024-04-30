import "./App.css";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const [user, setCurrUser] = useState(null);
  const [notes, setNotes] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const prevNotes = localStorage.getItem("notes");
    if (prevNotes) {
      setNotes(JSON.parse(prevNotes));
    }
  }, []);

  const addNote = (note: any) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const setUser = (user) => {
    setCurrUser(user);
  };

  const handleLogout = () => {
    localStorage.clear();
    setCurrUser(null);
    navigate("/login");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute setCurrUser={setUser}>
            <Home handleLogout={handleLogout} notes={notes} addNote={addNote} />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute setCurrUser={setUser}>
            <Login user={user} setUser={setUser} />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute setCurrUser={setUser}>
            <Signup user={user} setUser={setUser} />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
