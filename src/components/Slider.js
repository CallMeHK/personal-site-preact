/** @jsx h */

import { h, render } from "preact";
import SliderCard from "./SliderCard";
import css from "../assets/logos/frontend/css.jpg"
import D3L from "../assets/logos/frontend/D3L.png"
import HTML from "../assets/logos/frontend/HTML.png"
import jest from "../assets/logos/frontend/jest.png"
import js from "../assets/logos/frontend/js.png"
import reactS from "../assets/logos/frontend/reactS.svg"
import redux from "../assets/logos/frontend/redux.png"
import selenium from "../assets/logos/frontend/selenium.png"
import vue from "../assets/logos/frontend/vue.png"
import webpack from "../assets/logos/frontend/webpack.png"
import feathersjsResized from "../assets/logos/backend/feathersjsResize.jpeg"
import flask from "../assets/logos/backend/flask.png"
import mdb from "../assets/logos/backend/mdb.png"
import node from "../assets/logos/backend/node.png"
import python from "../assets/logos/backend/python.png"
import sql from "../assets/logos/backend/sql.png"
import git from "../assets/logos/other/git.png"


const tech = [
    {name:'CSS', img:css},
    {name:'D3', img:D3L},
    {name:'HTML',img:HTML},
    {name:'Jest', img:jest},
    {name:'JavaScript', img:js},
    {name:'React', img:reactS},
    {name:'Redux', img:redux},
    {name:'Selenium',img:selenium},
    {name:'Vue', img:vue},
    {name:'Webpack', img:webpack},
    {name:'FeathersJS', img:feathersjsResized},
    {name:'Flask', img:flask},
    {name:'MongoDB', img:mdb},
    {name:'node.js', img:node},
    {name:'Python', img:python},
    {name:'SQL', img:sql},
    {name:'git', img:git},
]
const Slider = props => (
  <div className="slider fade">
    <div className='slider-wrapper' style={{height:`${tech.length/2 * 30 +45}px`}}>
      {tech.map(elt => <SliderCard logo={elt.img} name={elt.name}/>)}
    </div>
  </div>
);

export default Slider;
