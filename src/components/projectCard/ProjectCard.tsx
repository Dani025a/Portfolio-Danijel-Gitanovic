
import { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import './projectcard.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Project } from '../../hooks/useProjects';

interface Props { 
  project: Project
}

const ProjectCard = ({ project }: Props) => 
{  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="project-card">
      <Carousel>
      {project.images.map((iamge, index) => (
  <Carousel.Item key={index}>
    <img className='images-content'
         src={iamge.image} // Corrected
         alt={`Slide ${index}`}
         style={{ width: '100%', cursor: 'pointer' }}
         onClick={() => openModal(iamge.image)}
    />
  </Carousel.Item>
))}
      </Carousel>
      <div className='name-container'>
        <h1>{project.name}</h1>
      </div>
      <div className='description-container'>
      <p>{project.description}</p>
      </div>      
      <div className='line-container'>
      <div className='line-divider'>
      </div>
      </div>
      <div className="languages">
        {project.techStack.map((tech, index) => (
          <img  className='languageicon' key={index} src={tech.icon} alt={tech.name} title={tech.name} />
        ))}
      </div>
      <div>
      <div className='github-btn-container'>
      <button className='github-btn'>
                    <a  href={project.githubRepo} className="github-btn-text">Github Repo</a>
                </button>
                </div>
      </div>
      <Modal show={showModal} onHide={closeModal} centered >
        <Modal.Header closeButton>
          <Modal.Title>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <img src={selectedImage} alt="Selected" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectCard;