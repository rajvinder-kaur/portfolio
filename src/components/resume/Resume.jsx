import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    const experience = [
      {
        company: "NatWest Group",
        position: "Software Developer Intern",
        started: "August 2022",
        ended: "Feburary 2023",
        description:
          "I worked on Java and Microservice from Aug 22 - Oct 22 and on Web Scrapping from Nov 22 - Feb 23",
        achievements: [
          "Worked closely with a senior dev to build Solar Dashboard.",
        ],
      },
    ];

    return (
      <div className="resume">
        <div className="resume_container">
          <div className="top_row">
            <h2>Sujal Garg</h2>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/sujalgarg17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-linkedin"></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href="https://github.com/sujal-garg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-github"></i> <span>Github </span>
                </small>
              </a>
            </div>
          </div>

          <p className="subheading">AI/ML and App Developer</p>

          <div className="summary">
            <p>
              I’m a AI/ML and App developer, passionate about transforming
              ideas from pixels to scalable products.
            </p>
          </div>

          <div className="divider">
            <p>Technologies</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              C++, Java, Python, tensorflow, Keras,Flutter, Firebase,Beautiful soup, SpringBoot, Thymeleaf, HTML, MySQL.
            </p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            {experience.map((exp, index) => (
              <section className="experience" key={index}>
                <p className="title">
                  {exp.company} - <i>{exp.position}</i>
                  <span>
                    <br /> {exp.started.toUpperCase()} -{" "}
                    {exp.ended === null ? "PRESENT" : exp.ended.toUpperCase()}
                  </span>
                </p>

                <article className="description">
                  <p> {exp.description} </p>
                  {exp.achievements.map((achievement, index) => (
                    <p key={index}>
                      <span>■</span> {achievement}
                    </p>
                  ))}
                </article>
              </section>
            ))}
          </div>

          <div className="divider">
            <p>Position of Responsibility</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className="title">
                Google DSC - Co Lead
                <span>
                  <br /> JANUARY 2023 - ONGOING
                </span>
              </p>
              <br></br>
              <p className="title">
                Google DSC - Core Team
                <span>
                  <br /> MARCH 2022 - JANUARY 2023
                </span>
              </p>
              <br></br>
              <p className="title">
                Tensorflow User Group Chandigarh - Member
                <span>
                  <br /> DECEMBER 2022 - ONGOING
                </span>
              </p>
              <br></br>
              <p className="title">
              Gender Sensitization Committee - Member
                <span>
                  <br /> FEBRUARY 2023 - ONGOING
                </span>
              </p>
            </section>
          </div>

          <div className="divider">
            <p>Projects</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <article className="description">
                <p>
                  Links to my works can be found on <span> </span>{" "}
                  <Link to="/work">https://github.com/sujal-garg</Link>{" "}
                </p>
              </article>
            </section>
          </div>
        </div>

        <div className="go_button_container">
          <Link to="/contact">
            <button>
              <span class="material-icons">arrow_left</span> Contact
            </button>
          </Link>
          <Link to="/">
            <button>
              Home <span class="material-icons">arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
