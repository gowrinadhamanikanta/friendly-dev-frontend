import type { Project } from "../../types";
import ProjectCard from "./ProjectCard";
type FeaturedProps = {
    projects:Project[];
    count:number;
}
const FeaturedProjects = ({projects,count}:FeaturedProps) => {
    if(projects.length===0) return null;
    return (  
        <section>
            <h2 className="font-bold text-2xl mb-6 text-gray-300">Featured Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project)=>(
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    );
}
 
export default FeaturedProjects;