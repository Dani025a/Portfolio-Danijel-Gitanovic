import React from 'react';
import './SkillImages.css';

import typescriptLogo from '../../assets/Typescript.png';
import javascriptLogo from '../../assets/JavaScript.png';
import reactLogo from '../../assets/React.png';
import kotlinLogo from '../../assets/Kotlin.png';
import flutterLogo from '../../assets/Flutter.png';
import mySQLLogo from '../../assets/mysql.png';
import cSharpLogo from '../../assets/c-sharp.png';
import mongoDBLogo from '../../assets/MongoDb.png';
import cypressLogo from '../../assets/Cypress.png';
import jestLogo from '../../assets/jest.png';



const SkillImages: React.FC = () => {
  return (
    <div className="skills-container">
      <img src={typescriptLogo} alt="TypeScript" className="skill-logo" />
      <img src={javascriptLogo} alt="JavaScript" className="skill-logo" />
      <img src={kotlinLogo} alt="kotlin" className="skill-logo" />   
      <img src={reactLogo} alt="react" className="skill-logo" />         
      <img src={flutterLogo} alt="flutter" className="skill-logo" />
      <img src={mySQLLogo} alt="mysql" className="skill-logo" />
      <img src={cSharpLogo} alt="csharp" className="skill-logo" />
      <img src={mongoDBLogo} alt="mongodb" className="skill-logo" />
      <img src={cypressLogo} alt="cypress" className="skill-logo" />
      <img src={jestLogo} alt="jest" className="skill-logo" />
    </div>
  );
};

export default SkillImages;
