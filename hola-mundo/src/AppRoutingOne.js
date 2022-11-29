import { BrowserRouter as Router, Route, Switch, Link, Navigate, Redirect } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/profilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import StatePage from "./pages/home/statePage";

function AppRoutingOne() {

  let logged = true

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]


  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log ('User Logged?', logged)
  }, []);
  

  

  return (
    <Router>

      <div>
        <aside>
          <Link to='/'>|| Home |</Link>
          <Link to='/about'>| About |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/any404'>| Not existing route |</Link>
          <Link to='/login'>| Login |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 ||</Link>



        </aside>

        <main>
          
          <Switch>
           

            <Route exact path="/" component={ HomePage } />
            <Route exact path="/online-state" component={ StatePage } />
           
            <Route path="/login" component= { LoginPage }>
              {
                logged ? 
                  () => {
                    alert ("You're logged in. Redirecting to home...")
                    return (<Redirect to= '/'/>)
                  }
                : 
                  () => {
                    alert ('You must be logged in. Redirecting to login...')
                    return (<LoginPage/>)
                  }
                
              }
            </Route>

            <Route exact path='/(about|faqs)' component= { AboutPage }/>
            
            <Route path='/profile' component= { ProfilePage }>

              {
                logged ? 
                <ProfilePage /> 
                : 
                () => {
                  alert ('You must be logged in. Redirecting to home...')
                  return (<Redirect to= '/login'/>)
                }
                
              }

            </Route>
            <Route path='/tasks' component = { TaskPage }/>
            <Route 
              exact 
              path='/task/:id'
              render = {
                ({match}) => (<TaskDetailPage task = {taskList[match.params.id-1]} />)
              }
              >


            </Route>
            {/* <Route path='/tasks
            /:id'  element= { (match) => <TaskDetailPage task={taskList[match.params.id-1]} /> }/>
  */}
            {/* <Route path='/tasks/:id' 
                  render = {
                    ({match}) => (<TaskDetailPage task = {taskList[match.params.id-1]} />)
                  }

            </Route> */}

            {/* 404 - Page not Found */}
            {/* You need to put the path on every route, or it will compile
            but it won't show you what you want... NON NEGOTIABLE */}
            <Route path= '*' component={ NotFoundPage } />
          </Switch>
        </main>
      </div>

    </Router>
  );
}

export default AppRoutingOne;
