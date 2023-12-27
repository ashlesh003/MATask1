/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img3.jpg";

const imageAltText = "This is Portfolio image. This is image-3.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "This is my project website.",
    description:
      "This is my project website. In this website I write about my skills in IT Field.",
    url: "https://salmon-coast-024450d00.4.azurestaticapps.net",
  },
  {
    title: "Registration Web Page",
    description:
      "Create a Registration web Page using HTML and CSS.",
    url: "https://github.com/ashlesh003/RegistrationPage.git",
  },
  {
    title: "Registration Form Page",
    description:
      " Create a Registration Form using JavaFx.",
    url: "https://github.com/ashlesh003/RegistrationForm.git",
  },
  {
    title: "Deploy the webpage",
    description:
      "Practically implementation and understanding of creating and deploying web page.",
    url: "https://youtu.be/OoAaVgGtu9I?feature=shared",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
