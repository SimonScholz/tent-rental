import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import { PropsWithChildren, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout: React.FC = (props: PropsWithChildren<ReactNode>) => (
  <Container>
    <Navbar />
    {props.children}
  </Container>
);

export default Layout;
