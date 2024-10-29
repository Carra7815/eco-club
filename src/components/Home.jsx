import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1>Welcome to the Eco Club!</h1>
      <p>
        Join us in our mission to protect and preserve the environment through
        innovative student-led projects. At the Ecosystem Club, we believe that
        every idea counts and every action matters. Our club empowers students
        to develop creative solutions for real-world environmental challenges.
      </p>
      <p>
        Explore our site to learn more about who we are, what we do, and the
        exciting projects we're working on.
      </p>
      <h2><Link to="/about">More About Us</Link></h2>
    </div>
  );
}

export default Home;
