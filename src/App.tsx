import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}
