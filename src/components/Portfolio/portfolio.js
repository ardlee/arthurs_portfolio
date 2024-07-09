import React from "react";
import './portfolio.css';
import abrakajumpa from '../../assets/abraicon.png';


const Portfolio = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksdescription">Here is my portfolio of projects I have made or been a part of!</span>
        <div className="workspanels">
        <div className="workspanel">
            <h2 className="workspanelheader">
            <a href="https://store.steampowered.com/app/2998050/Abrakajumpa/" target="_blank" rel="noreferrer"className="portfolioLink">
            Abrakajumpa
            </a>
            </h2>
            <img src={abrakajumpa} alt="" className="worksimg" />
            <p className="workspaneldesc">
                A challenging 2D vertical platformer made in Unity, published on Steam.
            </p>
        </div>


        </div>
    </section>
  )
}

export default Portfolio