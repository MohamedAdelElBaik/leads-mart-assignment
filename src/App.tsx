import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/login";
import Callback from "@/pages/callback";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the Callback page (handles GitHub OAuth redirect) */}
        <Route path="/callback" element={<Callback />} />

        {/* Default route (redirects to /login if no path matches) */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
