import React from "react";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat possimus eos odio voluptate hic in ipsum nisi, quasi sapiente enim velit inventore culpa explicabo mollitia sit corrupti nostrum veritatis?",
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque dolorum molestiae ratione quia dolorem et ullam vel quos architecto repellendus, quas tempora at incidunt, adipisci temporibus quis molestias voluptas!",
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sint ipsam est iste quaerat ex officiis inventore quasi repellendus at animi fugit enim quidem excepturi et incidunt, eum vero commodi.",
  },
];

function Projects() {
  return (
    <div className="body-container">
      <h1 className="mb-4 text-3xl font-bold">Our Projects</h1>
      <p className="mb-6">
        Here are some of the exciting projects our club is currently working on:
      </p>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded bg-white p-4 shadow-lg dark:bg-gradient-to-br dark:from-indigo-950 dark:to-sky-950 dark:shadow-inner dark:shadow-indigo-800"
          >
            <h2 className="mb-2 text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
