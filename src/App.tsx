import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Content from "./components/content/content";
import Sidebar from "./components/sidebar/sidebar";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </Router>
  );
}
