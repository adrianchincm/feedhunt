import "antd/dist/antd.css";
import Home from './containers/Home';
import {  Switch } from 'react-router-dom';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./containers/LandingPage";

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
  // console.log("ADMIN", props.isAdmin)
  // if (props.isAdmin) {
  //   routes = (
  //     <Switch>
  //       <Route path = "/cart" component={Cart}></Route>
  //       <Route path = "/delivery" exact component={Delivery}></Route>
  //       <Route path = "/checkout-details" exact component={CheckoutDetails}></Route>
  //       <Route path = "/admin" exact component={AdminLogin}></Route>
  //       <Route path = "/admin-view" exact component={AdminView}></Route>      
  //       <Route path = "/" exact component={MenuItemContainer}></Route>          
  //     <Redirect to="/" />
  //     </Switch>
  //   );
  // }

  return (
    <div className="bg-bgPrimary h-screen text-center">    
      {routes}
    </div>
  );
}

export default App;
