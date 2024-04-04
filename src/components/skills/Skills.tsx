import SkillImages from '../skillImages/SkillImages'
import './skills.css'

function Skills() {
  return (
    <div className='skills-container'>
        <div className='container-one'>
            <SkillImages></SkillImages>
        </div>
        <div className='container-two'>
            <h1><span className="highlighth1">Professional</span> skills:</h1>
            <div className='container-two_content'>
            <ul>
              <li><strong>JavaScript & TypeScript:</strong> Advanced proficiency in JavaScript, with practical experience in multiple projects. Recently started expanding skills into TypeScript.</li>
              <li><strong>Node.js:</strong> Utilized extensively in full-stack projects, primarily for backend development.</li>
              <li><strong>C#:</strong> Completed a C# course and applied it during my internship, enhancing my practical skills in the language.</li>
              <li><strong>React:</strong> Employed in several projects, demonstrating strong proficiency in this library.</li>
              <li><strong>Testing:</strong> Experience in Jest for unit and integration testing; proficient in Cypress for End-to-End testing.</li>
              <li><strong>Databases:</strong> Skilled in working with both relational and document databases, specifically MySQL and MongoDB. Kotlin: Applied in developing Android applications.</li>
              <li><strong>Flutter:</strong> Developed multiple cross-platform applications.</li>
              <li><strong>Methodologies:</strong> Practical application of Scrum, V-model, and Unified Process in project management.</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills