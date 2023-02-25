import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from "react-uuid";

export class Work extends Component {
  state = {
    projects: [

      {
        id: uuid(),
        title: "SafeLane - Road Safety Companion",
        description: "App to tackle the issue of potholes, open manholes, and other hazards.",
        github: "https://github.com/sujal-garg/SafeLane",
        stack: "Flutter, Firebase and Google Cloud",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Drowsiness Detector",
        description: "DL model which detects drowsiness and alerts user",
        github: "https://github.com/sujal-garg/Hack-cidents_IITMadras",
        stack: "CNN and OpenCV",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Brain Cancer and Tumor Detection",
        description: "DL model to detect Brain Cancer and Tumor.",
        github: "https://github.com/sujal-garg/",
        stack: "CNN",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Concentration Detector",
        description: "Detects Hands-off concemtration",
        github: "https://github.com/sijal-garg/",
        stack: "Unity, Blender, Brainflow",
        isPrivate: false,
      }
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    return (
      <div className='work'>
        <div className='portfolio_showcase'>
          {this.state.projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>

        <div className='go_button_container'>
          <Link to='/'>
            <button>
              <span class='material-icons'>arrow_left</span> Home
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              Contact <span class='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;
