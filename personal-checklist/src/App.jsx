import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const pastDate = new Date('2004-08-22');
  const currentDate = new Date();
  const diffInMs = currentDate - pastDate;
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
  
  const skills = [

    ...creativeSkills.map(skill => ({ name: skill, tag: "creative" })),
    ...physicalSkills.map(skill => ({ name: skill, tag: "physical" })),
    ...peopleSkills.map(skill => ({ name: skill, tag: "people" })),
    ...programmingSkills.map(skill => ({ name: skill, tag: "programming" })),
    ...academicSkills.map(skill => ({ name: skill, tag: "academic" })),
    ...miscSkills.map(skill => ({ name: skill, tag: "misc" })),
  ];

  // List of completed skills with proof links
  const proof = [
    { "Name": "Composing", "Link": "https://open.spotify.com/track/3lS6DJ9uUviFYdGnwutzG4?si=b4607737f7a047ff" },
    { "Name": "Skip a stone 8+ times", "Link": "https://www.youtube.com/watch?v=7ZzW6jpsP9k&t=2s"}
  ];

  const [filter, setFilter] = useState('all');
  const filteredSkills = filter === 'all' ? skills : skills.filter(skill => skill.tag === filter);

  // Find matching proof for a skill
  const getProofForSkill = (skillName) => proof.find(p => p.Name === skillName);

  return (
    <div id="site-container">
      <h1 id="title">For Sophie Walden, it's day #{totalDays}</h1>
      <h2 id="title-2">She should learn something new</h2>

      <div id="daily-skill">
        <h2>Today's Skill:</h2>
        <h3>{skills[totalDays % skills.length].name}</h3>
      </div>

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
            <div key={index}>
              <h3 className={skill.tag}>{getProofForSkill(skill.name) && (<span>✅</span>)} {skill.name}     {getProofForSkill(skill.name) && (
                <a href={getProofForSkill(skill.name).Link} target="_blank" rel="noopener noreferrer">
                  Proof
                </a>
              )}</h3>
          
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App;
