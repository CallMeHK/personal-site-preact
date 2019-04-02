/** @jsx h */

import { h, render } from "preact";

const GithubPreview = props => (
  <div className="git-card fade">
      <a href={props.link}><img className="git-img" src={props.pic} /></a>
      <div className="git-card-body">
        <div>
          <b>My current side project: {props.name}</b>
        </div>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
      </div>
  </div>
);

export default GithubPreview;
