import "antd/dist/antd.css";
import Home from './containers/Home';
import {  Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import LandingPage from "./containers/LandingPage";
import Profile from "./containers/Profile";
import { isAuthenticated } from './shared/api'
import { ThemeProvider } from '@material-ui/core/styles';
import { defaultTheme } from './styles/materialui'

const App = () => {
  console.log("AUTH", isAuthenticated())

  let routes
  
  
  if (isAuthenticated()) {
    console.log("IS AUTHENTICATED")
    routes = (
      <Switch>        
        <Route path = "/home" component={Home}></Route>        
        <Route path = "/profile" component={Home}></Route>
        <Route path = "/user/:username" component={Home}></Route>
        <Route path = "/products" component={Home}></Route>   
      <Redirect to="/home" />
      </Switch>
    );
  } else {
    routes = (
        <Switch>
          <Route path = "/home" exact component={Home}></Route>
          <Route path = "/login" exact component={Login}></Route>      
          <Route path = "/signup" exact component={Signup}></Route>
          <Route path = "/user/:username" component={Home}></Route>
          <Route path = "/products" component={Home}></Route>          
          <Route path = "/" exact component={LandingPage}></Route>       
          <Redirect to="/" />
        </Switch>
    )
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="bg-bgPrimary h-screen text-center overflow-auto ">    
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;
