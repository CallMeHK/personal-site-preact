/** @jsx h */

import { h, render } from "preact";
import doc from "../assets/doc.svg"

const Resume = props => {
  const openNew = () => {
    window.open("./resume.pdf", "_blank");
    win.focus();
  };
  return (
    <div className="resume-wrapper fade">
      <div className="resume" onClick={openNew}>
        <img className='doc-img' src={doc}/><h4>Check out my resume here</h4><img className='doc-img' src={doc}/>
      </div>
    </div>
  );
};

export default Resume;
