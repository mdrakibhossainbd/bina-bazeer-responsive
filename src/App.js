import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFount from './components/NotFound/NotFount';
import KrishiBazaar from './components/KrishiBazaar/KrishiBazaar/KrishiBazaar';
import MudiBazar from './components/MudiBazar/MudiBazar/MudiBazar';
import FashionBazar from './components/FashionBazar/FashionBazar/FashionBazar';
import ProductDetails from './components/ProductDetails/ProductDetails/ProductDetails';
import Login from './components/Login/Login/Login';
import Registration from './components/Registration/Registration/Registration';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CardPage from './components/Home/CardPage/CardPage';
import Header from './components/Home/Header/Header';
import SearchBar from './components/Home/SearchBar/SearchBar';
import Footer from './components/Home/Footer/Footer';
import Pay from './components/Home/Pay/Pay';
import CustomerDashBoard from './components/CustomerDashBoard/CustomerDashBoard';


export const UserContext = createContext();

function App() {

const [loginUser, setLoginUser] = useState({});

useEffect(()=>{
  fetch('http://api.binabazaar.com/api/user/logged-in-user-data',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
      })
      .then( res=> res.json())
      .then( data => {
          setLoginUser(data);
      });
},[]);

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}> 
      <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/CardPage">
              <Header/>
               <SearchBar/>
                <CardPage/>
                {/* <Footer/> */}
                <Pay/>
              </Route>

              {/* customer dashboard  */}
              <Route path="/CustomerDashBoard">
              <Header/>
               <SearchBar/>
                <CustomerDashBoard/>
              
                <Pay/>
              </Route>

              <Route path="/krishiBazaar">
                <KrishiBazaar></KrishiBazaar>
              </Route>
              <Route path="/mudiBazaar">
                <MudiBazar></MudiBazar>
              </Route>
              <Route path="/fashionBazaar">
                <FashionBazar></FashionBazar>
              </Route>
              <Route path="/singleProduct/:slug">
                <ProductDetails></ProductDetails>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
              <Route path="*">
                <NotFount></NotFount>
              </Route>
            </Switch>
          </Router>
    </UserContext.Provider>
  );
}

export default App;
