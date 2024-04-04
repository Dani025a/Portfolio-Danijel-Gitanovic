import './projectGrid.css'
import { ProjectQuery } from '../../App.ts';
import ProjectCardLoader from '../projectCard/ProjectCardLoader.tsx';
import ProjectCard from '../projectCard/ProjectCard.tsx';
import useProjects from '../../hooks/useProjects.ts';

interface Props {
  productQuery: ProjectQuery;
}

const ProjectGrid = ({ productQuery }: Props) => {
  const { data: projects, isLoading} = useProjects(productQuery);


  return (
    <>
      <div className="projectGrid section__padding">
        <div className="projectGrid-container">
          <div className="projectGrid-container_content">
            {isLoading && [...Array(20)].map((_, index) => (
              <ProjectCardLoader key={index} />
            ))}
            {Array.isArray(projects) && projects.map((project) => (
               <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectGrid
