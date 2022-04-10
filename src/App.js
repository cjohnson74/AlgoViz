import logo from "./images/logo512.png";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import ComingSoon from "./Components/ComingSoon";
import "../src/index.css";
import "../src/App.css"
import "./scss/Custom.scss";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from "react";
import SortingVisualizer from "./SortingVisualizer/SortingVisulaizer";

function App() {
  const [appState, setAppState] = useState({
    component: <PathfindingVisualizer />,
  })

  function renderSwitch(componentToRender){
    switch(componentToRender) {
      case "dijkstra":
        setAppState({component: <PathfindingVisualizer />});
        return;
      case "AStar":
        setAppState({component: <ComingSoon />});
        return;
      case "MergeSort":
        setAppState({component: <SortingVisualizer />});
        return;
      case "ComingSoon":
        setAppState({component: <ComingSoon />});
        return;
      default:
        setAppState({component: <ComingSoon />});
        return;
    }
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} width="80px"></img> AlgoViz</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Pathfinding Algorithms" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => renderSwitch("dijkstra")} href="#Dijkstra">
                  Dijkstra's Algorithm
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("AStar")} href="#AStar">
                  A* Search (coming soon)
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sorting Algorithms" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => renderSwitch("MergeSort")} href="#MergeSort">
                  Merge Sort
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("ComingSoon")} href="#ComingSoon">
                  (coming soon)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {appState.component}
    </div>
  );
}

export default App;
