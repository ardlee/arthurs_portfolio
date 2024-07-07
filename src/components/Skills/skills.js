import React from 'react'
import './skills.css';
import diplomaIcon from '../../assets/diploma.png';
import computerIcon from '../../assets/computer.png';
import gamepadIcon from '../../assets/gamepad.png';


const Skills = () => {
  return (
    <section id='skills'>
    <span className="sectionTitle">
        <h2>About Me</h2>
      </span>
      <span className="sectionParagraph">
        I am a game designer and web developer with a passion for creating websites and video games! <br />
        I have proficiency in C++, C#, Unity, JS, CSS, FMOD, and have experience with digital audio.
      </span>
      
      <div className="skillBars">

        <div className="skillBar">
            <img src={diplomaIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Education</h2>
                <p> I obtained an Associates degree in Computer Science at the City College of San Francisco. I then transferred and graduated from UCSC with a B.S. in Computer Science: Computer Game Design!</p>
            </div>
        </div>

        <div className="skillBar">
            <img src={gamepadIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Game Design and Development</h2>
                <p>I have developed web-based games utilizing JavaScript, TypeScript, and C++. In addition, I have extensive experience working on various games using Unity, showcasing my proficiency in game development. Furthermore, I possess strong skills in digital audio production, enhancing the overall multimedia experience of my projects. </p>
            </div>
        </div>

        <div className="skillBar">
            <img src={computerIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Web Development</h2>
                <p>I am eager to deepen my knowledge and gain further experience in web development. 
                My focus is in front end development using HTML, CSS, JS and TS, and back-end frameworks such as React.</p>
            </div>
        </div>

      </div>
    </section>
  );
};


export default Skills;