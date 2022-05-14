import logo from "./logo.svg";
import "./App.css";
import Canvas from "./components/canvas/Canvas";
import Arrow from "./components/shapes/Arrow";

function App() {
  return (
    <div>
      <p>hello</p>
      <Canvas>
        <Arrow />
      </Canvas>
    </div>
  );
}

export default App;
