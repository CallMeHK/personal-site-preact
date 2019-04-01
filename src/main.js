/** @jsx h */

import { h, render } from "preact";
import Intro from "./components/Intro";
import "./styles.css";
import About from "./components/About";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

const App = ({ children, ...props }) => (
  <div className="intro">
    <div className="container">
      <Intro />
      <About />
      <Slider />
    </div>
    <Footer />
  </div>
);

// render an instance of Clock into <body>:
render(<App />, document.body);
