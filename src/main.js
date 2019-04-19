/** @jsx h */

import { h, render } from "preact";
import Intro from "./components/Intro";
import "./styles.css";
import About from "./components/About";
import Slider from "./components/Slider";
import GithubPreview from "./components/GithubPreview";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import useWindowSize from "./hooks/useWindowSize";
import jsx from "./assets/jsx.png";

const github = {
  pic: jsx,
  name: "frame-jsx",
  description:
    "An start on a simple framework that uses babel and jsx to improve readability.",
  link: `https://github.com/CallMeHK/frame-jsx`
};

function App() {
  const size = useWindowSize();

  return (
    <div className="intro">
      <div className="container">
        <Intro />
        <About />
        <Slider />
        <div className="github">
          <GithubPreview {...github} />
          <Resume />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// render an instance of Clock into <body>:
render(<App />, document.body);
