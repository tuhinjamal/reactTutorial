import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FunctionalComponent from "./assets/components/functionalComponent";
import ClassComponent from "./assets/components/classComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ClassComponent locale="bn-BD">
          next session at 20 min tutorial no 8{" "}
        </ClassComponent>

        <FunctionalComponent
          locale="bn-BD"
          name="tuhinjamal"
          age={30}
          occupation="software developer"
        />

        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
