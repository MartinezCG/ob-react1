import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/profilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";

function AppRoutingOne() {

  return (
    <Router>

      <div>
        <aside>
          <Link to='/'>|| Home |</Link>
          <Link to='/about'>| About |</Link>
          <Link to='/faqs'>| FAQs ||</Link>
          <Link to='/any404'>| Not existing route ||</Link>
        </aside>

        <main>
          {/* In the actual version of React-router-dom the word or prop 'component'
            has been changed by 'element' 
            
            Also, the element 'Switch' has been changed by 'Routes' */}
          <Routes>
            {/* In the actual version of React-router-dom the word or prop 'exact'
            has been removed  */}
            <Route exact path="/" element= { <HomePage /> } />
            <Route path='/about' element= { <AboutPage /> }/>
            <Route path='/faqs' element= { <AboutPage /> }/>
            <Route path='/profile' element= { <ProfilePage /> }/>
            <Route path='/tasks' element= { <TaskPage /> }/>
            <Route path='/tasks/:id' element= { <TaskDetailPage /> }/>

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
