import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/profilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";
import LoginPage from "./pages/auth/LoginPage";

function AppRoutingOne() {

  let logged = false

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
  

  const redirectHome = () => {
    alert('You must be logged in. Redirecting to home...')
    return(
      
    <HomePage/>)
  }

  return (
    <Router>

      <div>
        <aside>
          <Link to='/'>|| Home |</Link>
          <Link to='/about'>| About |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/any404'>| Not existing route |</Link>
          <Link to='/login'>| Login ||</Link>
          <Link to='/task/1'>| Task 1 ||</Link>
          <Link to='/task/2'>| Task 2 ||</Link>



        </aside>

        <main>
          {/* In the actual version of React-router-dom the word or prop 'component'
            has been changed by 'element' 
            
            Also, the element 'Switch' has been changed by 'Routes' */}
          <Routes>
            {/* In the actual version of React-router-dom the word or prop 'exact'
            has been removed  */}

            <Route exact path="/" element= { <HomePage /> } />
            {/* PENDIENTE: VER COMO MOSTRAR UN ALERT Y QUE LUEGO REDIRIJA, probar con un ONCLICK*/}
            <Route exact path="/login" element= { logged ? <HomePage/> : <LoginPage /> }/>
            <Route path='/about' element= { <AboutPage /> }/>
            <Route path='/faqs' element= { <AboutPage /> }/>

            {/* Redirect doesn't work in v6, put the element to go in the ternary operator instead 
            
            or use Navigate from React route dom to do it */}

            {/* PENDIENTE: VER COMO MOSTRAR UN ALERT Y QUE LUEGO REDIRIJA */}
            <Route path='/profile' element= { logged ? <ProfilePage /> : <Navigate to = '/login'/> }>

              {/* {
                logged ? <ProfilePage /> : 
                  redirect('/')
              } */}

            </Route>
            <Route path='/tasks' element= { <TaskPage /> }/>
            {/* <Route path='/tasks/:id'  element= { <TaskDetailPage /> }/> */}
            <Route path='/tasks/:id'  element= { (match) => <TaskDetailPage task={taskList[match.params.id-1]} /> }/>
 
            {/* <Route path='/tasks/:id' 
                  render = {
                    ({match}) => (<TaskDetailPage task = {taskList[match.params.id-1]} />)
                  }

            </Route> */}

            {/* 404 - Page not Found */}
            {/* You need to put the path on every route, or it will compile
            but it won't show you what you want... NON NEGOTIABLE */}
            <Route path= '*' element= { <NotFoundPage/> } />
          </Routes>
        </main>
      </div>

    </Router>
  );
}

export default AppRoutingOne;
