import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Users from "./components/Pages/Users/Users";
import UserDetails from "./components/Pages/UserDetails/UserDetails";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import AddUser from "./components/Pages/AddUser/AddUser";
import Login from "./components/Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mh-75vh mt-5">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users/add" component={AddUser} />
          <Route path="/users/:id" component={UserDetails} />
          <Route path="/users" component={Users} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
