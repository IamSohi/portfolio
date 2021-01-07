import React from 'react';
import Navbar from '../components/Navbar';
import { items } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Card({id, title, category, link, theme}){
    return(
        <li className={`card ${theme}`}>
            <div className="card-content-container">
                <motion.div className="card-content"
                    layoutId={`card-container-${id}`}>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}>
                        <span className="category">{category}</span>
                        <h2>{title}</h2>

                    </motion.div>
                </motion.div>
            </div>
            <a href={""+link} className={`card-open-link`}/>
        </li>
    );
}

function Projects(props){ 

    return(
        <div id="projects">
        <header>
    <span className="github" ><a href="https://github.com/IamSohi">Github</a></span>
    <h1>Projects</h1>
    
  </header>
        <ul className="card-list">
            {items.map(card=>(
                <Card key={card.id} {...card}/>

            ))}
        </ul>
        </div>
    )
}

export default Projects;