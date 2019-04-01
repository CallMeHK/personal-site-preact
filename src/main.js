/** @jsx h */

import { h, render } from "preact";
import Intro from './components/Intro';
import './styles.css'
import About from "./components/About";
import Footer from "./components/Footer";


const App = ({ children, ...props }) => (
  <div className="intro">
    <Intro/>
    <About/>
    <Footer/>
  </div>
);

// render an instance of Clock into <body>:
render(<App />, document.body);
