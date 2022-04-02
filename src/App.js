import logo from "./logo.svg";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const algorithms = [
  {
    name: "Dijkstra's Algorithm",
    description: "The father of pathfinding algorithms; guarantees the shortest path",
    href: "#",
  },
  {
    name: "A* Search (coming soon)",
    description: "arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm",
    href: "#",
  },
  {
    name: "Greedy Best-first Search (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Swarm Algorithm (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Convergent Swarm Algorithm (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Bidirectional Swarm Algorithm (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Breadth-first Search (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Depth-first Search (coming soon)",
    description: "",
    href: "#",
  }
]

const mazesAndPatterns = [
  {
    name: "Recursive Division (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Recursive Division (vertical skew) (coming-soon)",
    description: "",
    href: "#",
  },
  {
    name: "Recursive Division (horizontal skew) (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Basic Random Maze (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Basic Weight Maze (coming soon)",
    description: "",
    href: "#",
  },
  {
    name: "Simple Stair Pattern (coming soon)",
    description: "",
    href: "#",
  }
]

function App() {
  return (
    <div className="App">

      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
