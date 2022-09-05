import React from "react";
import './App.css'
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Switch>
          <Route exact path="/michado-portfolio" component={Main} />
          <Route path="/about" component={About} />
        </Switch>
        <Route />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;