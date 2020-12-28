import "antd/dist/antd.css";
import Home from './containers/Home';
import {  Switch } from 'react-router-dom';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./containers/LandingPage";
import { isAuthenticated } from './shared/api'
import { ThemeProvider } from '@material-ui/core/styles';
import { defaultTheme } from './styles/materialui'

const App = () => {
  let routes = (
    <Switch>
      <Route path = "/home" exact component={Home}></Route>
      <Route path = "/login" exact component={Login}></Route>      
      <Route path = "/signup" exact component={Signup}></Route>   
      <Route path = "/" component={LandingPage}></Route>       
    <Redirect to="/" />
    </Switch>
  );
  
  if (isAuthenticated()) {
    console.log("IS AUTHENTICATED")
    routes = (
      <Switch>        
        <Route path = "/home" component={Home}></Route>        
      <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="bg-bgPrimary h-full h-screen text-center">    
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;
