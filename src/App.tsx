import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Requests from "./components/pages/Request";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";
import Faq from "./components/pages/Faq";
import Calendar from "./components/pages/Calendar";
import Impressions from "./components/pages/Impressions";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/request" component={Requests} />
          <Route exact path="/impressions" component={Impressions} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
