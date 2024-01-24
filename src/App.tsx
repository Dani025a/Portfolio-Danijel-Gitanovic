import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import './App.css';
import blackbgcrooked from './assets/blackbgcrooked.svg';
import blackbgstraight from './assets/blackbgstraight.svg';
import useSmoothScroll from './useSmoothScroll.tsx';
import { Project } from './hooks/useProjects.ts';
import { useState } from 'react';
import useLanguages from './hooks/useLanguages.ts';
import ProjectGrid from './components/porjectGrid/ProjectGrid.tsx';

export interface ProjectQuery {
  languageId?: number;
  product: Project | null;
  sortOrder: string;
}


const App = () => {
  const [projectQuery, SetProejctQuery] = useState<ProjectQuery>({} as ProjectQuery);
  const { data: languages, error} = useLanguages();
  useSmoothScroll();
  
  const handleSortChange = (option: string) => {

    if (option === "All") {
      SetProejctQuery({ ...projectQuery, languageId: null! })  
    }
    
    SetProejctQuery({ ...projectQuery, languageId: parseInt(option) })  
  };

  return (
    <div>     
      <div>
        <div className="black-bg" style={{ backgroundImage: `url(${blackbgcrooked})` }} id='about'>
        <Navbar/>
        <div className='aboutme' id='aboutme'>
          <AboutMe />
          </div>
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div className="black-bg" style={{ backgroundImage: `url(${blackbgstraight})` }} id='work'>
          <div className='header-projects'>
          <h1>My <span className="projects-highlighth1">Work</span></h1>

          </div>
        <div className="sort-dropdown">
        <select onChange={(e) => handleSortChange(e.target.value)}>
          <option value={"All"}>All</option>
          {Array.isArray(languages) && languages.map((language) => (
            <option key={language.id} value={language.id}>{language.name}</option>
          ))}
        </select>
      </div>
      <ProjectGrid productQuery={projectQuery}></ProjectGrid>
      </div>
      </div>
    </div>
  );
}

export default App;
