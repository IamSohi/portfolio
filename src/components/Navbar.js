import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { motion, AnimateSharedLayout } from "framer-motion";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar(props) {

    const items = [
        {
            name: 'About',
            color: '#0099ff',
            icon: 'perm_identity'
        },
        {
            name: 'Projects',
            color: '#ff0055',
            icon: 'handyman'
        },
        {
            name: 'Education',
            color: '#22cc88',
            icon: 'school'
        },
        {
            name: 'Experience',
            color: '#ffaa00',
            icon: 'work'
        }
    ];



    const location = useLocation();

    let color = items[0].color;
    items.forEach(item => ((item.name.toLowerCase()) === (location.pathname.substr(1))) ? color = item.color : '');
    const [selected, setSelected] = useState(color);


    return (

        <AnimateSharedLayout>
            <ul className="navigation" id="nav">
                <Grid container spacing={2} style={{ justifyContent: "center" }}>
                    <Grid item xs={false} md={2}></Grid>


                    {items.map((item) => (
                        <Grid key={item.icon} item xs={2}>

                            <Item
                                key={item.color}
                                color={item.color}
                                isSelected={selected === item.color}
                                navItem={item.name}
                                navIcon={item.icon}
                                onClick={() => setSelected(item.color)}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={false} md={2}></Grid>

                </Grid>
            </ul>
        </AnimateSharedLayout>


    );
}

function Item({ color, navItem, navIcon, isSelected, onClick }) {
    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 30
    };
    return (
        <li key={navItem} className="navItem" onClick={onClick}>
            { isSelected && <motion.div
                layoutId="outline"
                className="outline"
                initial={false}
                animate={{ borderColor: color }}
                transition={spring}
            />
            }
            <Link key={color + navItem} className="navLink" to={"/" + ((navItem === "About") ? "" : navItem.toLowerCase())} style={{ color: color }}>


                <Hidden smDown>
                    {navItem}
                </Hidden>
                <Hidden mdUp>
                    <span class="material-icons">{navIcon}</span>
                </Hidden>
            </Link>
        </li>

    )
}

export default Navbar;