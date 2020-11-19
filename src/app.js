import React from 'react';
import Home from './home';
import Footer from './footer';
import Header from './header';
import ItemDetail from './detail/items-detail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NewArrival from './detail/new-arrival';


function App() {
  return(    
    <>
        <Router>
        <Header/>
            <Switch>
                  <Route path="/new-arrival">
                    <NewArrival/>
                  </Route>
                  <Route path="/product/:id">
                    <ItemDetail/>
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
            </Switch>
        </Router>
        <Footer/>
    </>
  );
}

export default App;
