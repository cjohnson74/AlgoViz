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
      case "Dijkstra":
        setAppState({component: <PathfindingVisualizer />});
        return;
      case "AStar":
        setAppState({component: <ComingSoon />});
        return;
      case "SortingAlgorithms":
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
              <NavDropdown title="Pathfinding Algorithms" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => renderSwitch("Dijkstra")} href="#Dijkstra">
                  Dijkstra's Algorithm
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("AStar")} href="#AStar">
                  A* Search (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("Greedy")} href="#Greedy">
                  Greedy Best-first Search (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("Swarm")} href="#Swarm">
                  Swarm Algorithm(weighted) (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("ConvergentSwarm")} href="#ConvergentSwarm">
                  Convergent Swarm(weighted) (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("BidirectionalSwarm")} href="#BidirectionalSwarm">
                  Bidirectional Swarm(weighted) (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("BreathFirst")} href="#BreathFirst">
                  Breath-first Search(unweighted) (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("DepthFirst")} href="#DepthFirst">
                  Depth-first Search(unweighted) (coming soon)
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => renderSwitch("SortingAlgorithms")}>Sorting Algorithms</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Data Structures (coming soon)" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => renderSwitch("Arrays")} href="#Arrays">
                  Array/List (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("LinkedLists")} href="#AStar">
                  Linked List (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("HashTables")} href="#AStar">
                  HashTables (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("Queue")} href="#AStar">
                  Queue (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("Stack")} href="#AStar">
                  Stack (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("Trees")} href="#AStar">
                  Trees(Binary) (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => renderSwitch("Graphs")} href="#AStar">
                  Graphs (coming soon)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {appState.component}
    </div>
  );
}

export default App;
