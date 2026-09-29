import type { Route } from "./+types/index";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/pagination";
import { useState, type ComponentProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project,StrapiResponse,StrapiProject } from "../../../types";

type Project = ComponentProps<typeof ProjectCard>["project"];
export async function loader({request}:Route.LoaderArgs):
Promise<{projects:Project[]}>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);
    const json:StrapiResponse<StrapiProject> = await res.json();
    const projects = json.data.map((item)=>({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        url: item.url,
        image: item.image?.url ? `${item.image.url}`:'/images/no-image.png',
        date: item.date,
        category: item.category,
        featured: item.featured
    }))
    return { projects };
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly-dev | Projects" },
    { name: "description", content: "My website project portfolio" },
  ];
}

const ProjectsPage = ({loaderData}:Route.ComponentProps) => {
    const [selectedCategory,setSelectedCategory] = useState('All');
    const [currentPage,setCurrentPage] = useState(1);
    const {projects} = loaderData as {projects : Project[]};
    //Get Unique Categories
    const categories = ['All',...new Set(projects.map((project)=>project.category)),]
    //Filter Projects based on Categories
    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory);
    const projectsPerPage = 10 ;
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast-projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst,indexOfLast);
    //Calculate totalPagesPage projects
    const totalPages = Math.ceil(filteredProjects.length/projectsPerPage);  

const renderPagintaion = () =>{
    return(
        <div className="flex justify-center gap-2 mt-8">
        {Array.from({length: totalPages},(_,idx)=>(
        <button
            key={idx+1}
            className={`px-3 py-1 cursor-pointer rounded ${currentPage === idx+1 ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            onClick={() => setCurrentPage(idx+1)}
        >
            {idx+1}
        </button>
        ))}
    </div>
    )
}

    return (  
        <>
            <h2 className="text-3xl font-bold text-white mb-8">🚀Projects</h2>
            <div className="flex flex-wrap mb-8 gap-2 ">
                {categories.map((category)=>(
                    <button 
                        key={category}
                        onClick={()=>{
                            setSelectedCategory(category);
                            setCurrentPage(1);
                        }}
                        className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? 'bg-blue-600 text-white ' : 'bg-gray-700 text-gray-200 hover:bg-blue-600' }`}
                    >
                        {category}
                    </button>
                ))}
            </div>    
            <AnimatePresence>
                <motion.div className="grid gap-6 sm:grid-cols-2">
                {currentProjects.map((project)=>(
                    <motion.div key={project.id} layout>
                        <ProjectCard project={project} key={project.id}/>
                    </motion.div>
                ))}
            </motion.div>
            </AnimatePresence>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
        </>
    );
}

export default ProjectsPage;