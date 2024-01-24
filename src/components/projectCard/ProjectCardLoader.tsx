import './projectCardLoarder.css';

const ProjectCardLoader = () => {
  return (
    <div className="project-card-loader">
      <div className="images-loader"></div>
      <div className="text-loader name-loader"></div>
      <div className="text-loader description-loader"></div>
      <div className="line-loader"></div>
      <div className="text-loader tech-stack-loader"></div>
      <div className="text-loader github-loader"></div>
    </div>
  );
};

export default ProjectCardLoader;