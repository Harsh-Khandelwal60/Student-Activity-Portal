import React from 'react'
import './NavbarStyles.css';
import MyImage from '../../assets/images/swgLogo.jpg'
import {motion} from "framer-motion";
import {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


class Navbar extends Component {
    state = {
        clicked: false
    };
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return ( 
            <nav> 
            <a href = '/' >
                <img src={MyImage} alt="SWS logo" style={{ objectFit:'cover' ,width :'auto',height:'60px'}}/>
            
            </a> 
            <div>
            <ul id = "navbar"
            className = {
                this.state.clicked ? "#navbar active" : "#navbar"
            } >
            <a href = '/'className = "links" >
            <motion.li whileHover = {
                {
                    scale: 1.1,
                    y: -2
                }
            }
            whileTap = {
                {
                    scale: 0.9,
                    y: 0
                }
            } >
            Home </motion.li> </a> 
            <a href = '/events'className = "links" >
            <motion.li whileHover = {
                {
                    scale: 1.1,
                    y: -2
                }
            }
            whileTap = {
                {
                    scale: 0.9,
                    y: 0
                }
            } >
            Events </motion.li> <
            /a> <
            a href = '/resources'
            className = "links" >
            <motion.li whileHover = {
                {
                    scale: 1.1,
                    y: -2
                }
            }
            whileTap = {
                {
                    scale: 0.9,
                    y: 0
                }
            } >
            Resources </motion.li>
            </a> 
            
            <a href = '/about'
            className = "links" >
            <motion.li whileHover = {
                {
                    scale: 1.1,
                    y: -2
                }
            }
            whileTap = {
                {
                    scale: 0.9,
                    y: 0
                }
            } >
            About </motion.li>
            </a> 
            </ul> 
            </div>
            <div id = 'mobile'
            onClick = {
                this.handleClick
            } >

            <i id = 'bar'
            className = {
                this.state.clicked ? 'fas fa-times' : 'fas fa-bars'
            } > </i>

            
            </div> 
            </nav>
        )
    }

}

export default Navbar;