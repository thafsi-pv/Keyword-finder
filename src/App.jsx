import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import KeyWordFinder from "./components/KeywordFinder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <KeyWordFinder />
    </>
  );
}

export default App;
