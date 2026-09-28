import type { Project } from "../../types";
import { Link } from "react-router";

const ProjectCard = ({project}:{project:Project}) => {
    return (  
       <Link className="block transform transition duration-300 hover:scale-[1.02]" to={`/projects/${project.documentId}`}>
        <div className="bg-gray-800 border bordr-gray-700 rounded-lg overflow-hidden shadow-sm tarnsition hover:shadow-md">
                        <img src={project.image} alt={project.title} className="w-full object-cover h-40" />
                        <div className="p-5">
                            <h2 className="tex-3xl font-semibold text-blue-300 mb-1">
                                {project.title}
                            </h2>
                            <p className="text-sm text-gray-300">{project.description}</p>
                            <div className="flex justify-between text-sm text-gray-400">
                                <span>{project.category}</span>
                                <span>{new Date(project.date).toLocaleDateString("en-IN")}</span>
                            </div>
                        </div>
                   </div>
       </Link>
    );
}

export default ProjectCard;
