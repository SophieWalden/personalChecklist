import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const pastDate = new Date('2004-08-22');

  // Current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = currentDate - pastDate;

  // Convert milliseconds to days
  const msInDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor(diffInMs / msInDay);

  const programmingSkills = [
    'GraphQL',
    'TypeScript',
    'Docker',
    'AWS',
    'Kubernetes',
    'SQL',
    'Git & GitHub',
    'Unit Testing',
  ];
  
  const creativeSkills = [
    "Storytelling",
    "Dancing",
    "Acting",
    "Singing",
    "Composing",
    "Crochet",
    "Origami",
    "Calligraphy",
    "Cooking",
    "Baking",
    "Animation"
  ];
  
  const physicalSkills = [
    "Juggling",
    "Run a sub-7 minute mile",
    "10 Mile Hike",
    "Skip a stone 8+ times"
  ];
  
  const peopleSkills = [
    "Public Speaking",
    "Standup Comedy",
    "Lip Reading"
  ];
  
  const academicSkills = [
    "Spelling",
    "Speedreading",
    "Navigation",
    "Investing",
    "Hit 1200 ELO in Chess"
  ];
  
  const miscSkills = [
    "Card Tricks"
  ];
  
  let skills = [];
  
  // Loop through each skill list and add the tag to the skill objects
  
  for (let i = 0; i < programmingSkills.length; i++) {
    skills.push({ name: programmingSkills[i], tag: "programming" });
  }
  
  for (let i = 0; i < creativeSkills.length; i++) {
    skills.push({ name: creativeSkills[i], tag: "creative" });
  }
  
  for (let i = 0; i < physicalSkills.length; i++) {
    skills.push({ name: physicalSkills[i], tag: "physical" });
  }
  
  for (let i = 0; i < peopleSkills.length; i++) {
    skills.push({ name: peopleSkills[i], tag: "people" });
  }
  
  for (let i = 0; i < academicSkills.length; i++) {
    skills.push({ name: academicSkills[i], tag: "academic" });
  }
  
  for (let i = 0; i < miscSkills.length; i++) {
    skills.push({ name: miscSkills[i], tag: "misc" });
  }
  
  const [filter, setFilter] = useState('all'); // Default to 'all' (show all skills)

  // Function to handle filtering
  const filteredSkills = filter === 'all' ? skills : skills.filter(skill => skill.tag === filter);

  

  return (
    <div id="site-container">
    <h1 id="title">For Sophie Walden, it's day #{totalDays}</h1>
    <h2 id="title-2">She should learn something new</h2>

    <div>
      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('programming')}>Programming</button>
        <button onClick={() => setFilter('creative')}>Creative</button>
        <button onClick={() => setFilter('physical')}>Physical</button>
        <button onClick={() => setFilter('people')}>People</button>
        <button onClick={() => setFilter('academic')}>Academic</button>
        <button onClick={() => setFilter('misc')}>Misc</button>
      </div>

      {/* Display Skills */}
      <div>
        {filteredSkills.map((skill, index) => (
          <h3 key={index} className={skill.tag}>{skill.name}</h3>
        ))}
      </div>
    </div>
  </div>
  )
}

export default App
