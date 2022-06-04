import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { LeftVector, RightVector } from "./components/Vectors";

const getData = async () => {
  const response = await axios(
    "https://newsapi.org/v2/everything?q=keyword&apiKey=f6690e0a17614924a14aee67d2ec5c01"
  );
  console.log(response.data);
  return response.date[0];
};

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const data = getData();
    console.log(data);
    setState(data);
  }, []);

  console.log(state.urlToImage);
  return (
    <section>
      <Navbar />
      <LeftVector />
      <RightVector />
      <Hero />
    </section>
  );
}

export default App;
