import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import RandomNumber from "./components/RandomNumber";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <div className="components-container">
        <Counter />
        <RandomNumber />
      </div>
      <Analytics />
    </>
  );
}

export default App;
