import { BrowserRouter as Router, Route, Switch, Link, Navigate, Redirect } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";
import RegisterPage from "./pages/auth/RegisterPage";
import TaskListComponent from "./components/container/task_list";

function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something like that)
  let loggedIn = false

  return (
    <Router>
      {/* Route switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
            loggedIn ?
            <Redirect from="/" to='/dashboard' />
            :
            <Redirect from="/" to='login' />
          }
        </Route>

        {/* Login Route */}
        <Route exact path='/login' component={ LoginPage } />

        {/* Register Route */}
        <Route exact path='/register' component={ RegisterPage } />

        {/* Dashboard Route */}
        <Route exact path='/dashboard'>
          {
            loggedIn ?
            <DashBoard />
            :
            <Redirect from="/" to='login' />
          }
        </Route>

        {/* Task list Route */}
        <Route exact path='/tasks'>
          {
            loggedIn ?
            <TaskListComponent/>
            :
            <Redirect from="/" to='/login'/>
          }
        </Route>

        <Route component={ NotFoundPage } />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
