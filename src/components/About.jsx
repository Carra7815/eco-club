import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="body-container">
      <h1>About Us</h1>
      <p>
        The Ecosystem Club is a student-led organization dedicated to fostering
        a strong commitment to environmental stewardship. Our mission is to
        protect and preserve our planet by empowering students to develop
        innovative solutions that address pressing ecological issues.
      </p>
      <h2>
        <Link to="/vision">
          Our Vision
          <ArrowUpRightIcon className="std-icon" />
        </Link>
      </h2>
      <p>
        We envision a world where students take the lead in environmental
        conservation, using their creativity and passion to implement
        sustainable practices in their communities.
      </p>
      <h2>
        <Link to="/beliefs">
          What We Believe
          <ArrowUpRightIcon className="std-icon" />
        </Link>
      </h2>
      <ul>
        <li>
          <b>Collaberation: </b>
          <p>
            We believe in the power of teamwork. By working together, we can
            generate ideas that are greater than the sum of their parts.
          </p>
        </li>
        <li>
          <b>Empowerment: </b>
          <p>
            Every student has the potential to make a difference. We provide a
            platform for students to express their ideas and take action.
          </p>
        </li>
        <li>
          <b>Sustainability: </b>
          <p>
            We are committed to promoting sustainable practices that benefit our
            environment now and for future generations.
          </p>
        </li>
      </ul>
      <h2>
        <Link to="/projects">
          Our Projects
          <ArrowUpRightIcon className="std-icon" />
        </Link>
      </h2>
      <p>
        If you're interested in being part of our journey toward a more
        sustainable future, we invite you to join the Ecosystem Club! Let's work
        together to turn innovative ideas into real-world solutions.
      </p>
    </div>
  );
}

export default About;
