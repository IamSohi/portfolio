import React from 'react';
import { useState } from "react";
import {motion, AnimateSharedLayout} from "framer-motion";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Projects from '../Pages/Projects.js';
import About from '../Pages/About.js';

function Intro(props){
    const items=[
        {name:'About',
        position:['22%','75%'],
        color:'#0099ff'},
        {name:'Projects',
        position:['10%','15%'],
        color:'#ff0055'},
        {name:'Education',
        position:['75%','10%'],
        color:'#22cc88'},
        {name:'Experience',
        position:['65%','65%'],
        color:'#ffaa00'}
    ];
    
    const [selected, setSelected] = useState(items[0].color);

    // window.addEventListener('scroll', function() {
    //     var element = document.querySelector('container');
    //     var position = element.getBoundingClientRect();
    //     var nav = document.querySelector('#nav');
    //     if(position.bottom > 0){
    //         nav.classList.add('show');
    //     }else{
    //         nav.style.visibility='visible';
    //         nav.classList.remove('show');
    //     }
    // });
    

      
    return(
        <div className="container" id="container">
        

        
        <AnimateSharedLayout>
        <img/>
            {items.map((item)=>{
                return(
                    <IntroItems title={item.name} position={item.position} key={item.color}
            color={item.color}
            isSelected={selected === item.color}
            onClick={() => setSelected(item.color)}/>
                )
            }
                
            )}
        </AnimateSharedLayout>
            
        </div>
    )
}

function IntroItems({ title, position, color, isSelected, onClick }){
    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 30
      };
      
    return(
        <div className="bubbles" onClick={onClick} style={{position:'absolute',left:position[0],top:position[1],backgroundColor: color}}>

        {isSelected && (<motion.div className="outline"
        layoutId="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}

        >
        
        </motion.div>) 
        }
        <h2><a href={"#"+title}>{title}</a></h2>

        </div>
    )
}

export default Intro;