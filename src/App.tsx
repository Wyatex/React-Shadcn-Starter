import { useSignal } from "@preact/signals-react";
import "./App.css";
import { Button } from "./components/ui/button";

function Counter() {
  const count = useSignal(0);
  
  return (
    <Button onClick={() => count.value++}>
      count is {count.value}
    </Button>
  );
}

function App() {

  return (
    <>
      <div className="flex justify-between">
        <a href="https://vite.dev" target="_blank">
          <div className="i-logos-vitejs logo"></div>
        </a>
        <a href="https://react.dev" target="_blank">
          <IconLogosReact className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
