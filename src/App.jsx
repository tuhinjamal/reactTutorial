// import { useState } from "react";
import "./App.css";
import Header from "./assets/components/revision/header";
import Footer from "./assets/components/revision/footer";
import ConditionalRender from "./assets/components/conditionaRender";
import ClockList from "./assets/components/clockList";

// import FunctionalComponent from "./assets/components/functionalComponent";
// import ClassComponent from "./assets/components/classComponent";

function App() {
  // const [count, setCount] = useState(0);
  const quantities = [1, 2];

  return (
    <>
      <Header />
      <ClockList quantities={quantities} />

      <ConditionalRender />
      <Footer />
    </>
  );
}

export default App;

{
  /* <div>
        <ClassComponent locale="bn-BD">
          session 9 done now it's 10{" "}
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
      </div> */
}
