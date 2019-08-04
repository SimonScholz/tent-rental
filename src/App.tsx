import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Requests from "./components/Request";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/request" component={Requests} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
