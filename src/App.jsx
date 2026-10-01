import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <>
      <Header />
      <div className="components-container">
        <Counter />
        <RandomNumber />
      </div>
    </>
  );
}

export default App;
