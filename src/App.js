import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { LeftVector, RightVector } from "./components/Vectors";
import BlogContainer from "./components/BlogContainer";

function App() {
  return (
    <section>
      <Navbar />
      <LeftVector />
      <RightVector />
      <Hero />
      <BlogContainer />
    </section>
  );
}

export default App;
