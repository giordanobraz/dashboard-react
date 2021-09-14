import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/dashboard/dashboard";
import Doctors from "./components/doctors/doctors";
import Sidebar from "./components/sidebar/sidebar";

export default function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <div className="container">
            <Sidebar />
            <Route exact path="/" component={Dashboard} />
            <Route path="/doctors" component={Doctors} />
          </div>
        </Fragment>
      </Switch>
    </Router>
  );
}
