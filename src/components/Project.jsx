import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ClimbingBoxLoader } from "react-spinners";
import Modal from "../components/Modal";
import ReactDOM from "react-dom";

export default function Project() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/RasmusWenngren92/repos")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading)
    return (
      <>
        <div className="project-section">
          <ClimbingBoxLoader size={10} color="#faebd7" />
        </div>
      </>
    );

  return (
    <>
      {data.map((project) => (
        <article className="card" key={project.id}>
          <div className="card-header">
            <img src="https://picsum.photos/100/200" alt={project.name} />
          </div>
          <div className="card-body">
            <h3>{project.name}</h3>
            <p>Language: {project.language || "Unknown language"}</p>
            <p>{project.description || "No description available"}</p>
          </div>
          <div className="card-footer">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FontAwesomeIcon icon={faGithub} /> View Repository
            </a>
            <button onClick={() => setSelectedProject(project)} className="btn">
              View Details
            </button>
          </div>
        </article>
      ))}

      {selectedProject &&
        ReactDOM.createPortal(
          <Modal
            isOpen={!!selectedProject}
            setIsOpen={() => setSelectedProject(null)}
            data={selectedProject}
          />,
          document.body
        )}
    </>
  );
}
