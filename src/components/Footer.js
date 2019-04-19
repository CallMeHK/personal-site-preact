/** @jsx h */

import { h, render } from "preact";
import githubSm from "../assets/githubSm.png";
import linkedin from "../assets/linkedin.png";

const Footer = props => {
  return (
    <div className="footer fade">
      <div className="footer-wrangler">
        <div className="email">tyler.gregg.ma@gmail.com</div>
        <div className="icons">
          <a href="https://github.com/CallMeHK/">
            <img src={githubSm} />
          </a>
          <a href="https://www.linkedin.com/in/tyler-gregg-803317103/">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
