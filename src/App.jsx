import "./app.css";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Video from "./pages/film/Video";
function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            { user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">
           {!user ? <Login /> : <Redirect to="/" />}
          </Route>
          {
            user && (
              <>
                <Route path="/films">
                  <Home type="films" />
                </Route>
                <Route path="/series">
                  <Home type="series" />
                </Route>

                <Route path="/watch">
                  <Video />
                </Route>
              </>
            )
          }
          <Route path="/films">
            <Home type="films" />
          </Route>
          <Route path="/series">
            <Home type="series" />
          </Route>
         
          <Route path="/watch">
            <Video />
          </Route>
        </Switch>

      </Router>
     
    </div>
  );
}
 
export default App;
 