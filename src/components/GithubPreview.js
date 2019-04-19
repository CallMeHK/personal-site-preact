/** @jsx h */

import { h, render } from "preact";

const GithubPreview = props => (
  <div className="git-card fade">
    <div className="git-card-head">
      <a href={props.link}>
        <img className="git-img" src={props.pic} />
      </a>

      <div className="git-card-text-head">
        <b>My current side project: {props.name}</b>
      </div>
    </div>
    <div className="git-card-body">
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </div>
  </div>
);

export default GithubPreview;
