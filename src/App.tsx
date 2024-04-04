import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import Timeline from './components/timeline/Timeline';
import Skills from './components/skills/Skills';
import './App.css';
import useSmoothScroll from './useSmoothScroll.tsx';
import { Project } from './hooks/useProjects.ts';
import { useState } from 'react';
import ProjectGrid from './components/porjectGrid/ProjectGrid.tsx';
import useIcons from './hooks/useIcons.ts';
import Footer from './components/footer/Footer.tsx';

export interface ProjectQuery {
  iconId?: number;
  product: Project | null;
  sortOrder: string;
}


const App = () => {
  const [projectQuery, SetProejctQuery] = useState<ProjectQuery>({} as ProjectQuery);
  const { data: icons} = useIcons();
  useSmoothScroll();
  
  const handleSortChange = (option: string) => {
    if (option === "All") {
      SetProejctQuery({ ...projectQuery, iconId: undefined });
    } else {
      SetProejctQuery({ ...projectQuery, iconId: parseInt(option) });
    }
  };
  
  return (
    <div>     
      <div>
        <div className="black-bg" id='about'>
        <Navbar/>
        <div className='aboutme' id='aboutme'>
          <AboutMe />
          </div>
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='timeline'>
          <Timeline />
        </div>
        <div className="black-bg-straight" id='work'>
          <div className='header-projects'>
          <h1>My <span className="projects-highlighth1">Work</span></h1>
          </div>
        <div className="sort-dropdown">
        <select onChange={(e) => handleSortChange(e.target.value)}>
          <option value={"All"}>All</option>
          {Array.isArray(icons) && icons.map((icon) => (
            <option key={icon.id} value={icon.id}>{icon.name}</option>
          ))}
        </select>
      </div>
      <div className='projects-items'>
      <ProjectGrid productQuery={projectQuery}></ProjectGrid>
      </div>
      </div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
