import { useState } from "react";

// import components
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Navigation />
      <Service />
      <Contact />
      <Footer />
      <p>hello!</p>
    </>
  );
}

export default App;
