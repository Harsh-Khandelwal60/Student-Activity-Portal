import React, { useEffect, useRef} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Work} from "./WorkData";
import Card from "./Card";
import ParticlesBG from "../SubComponents/Particles";

const Box = styled.div `
  background-color: #fff;

  height: 740vw;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)
`
  position: fixed;
  top: 24vh;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;
const Rotate = styled.span `
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};

const WorkPage = () => {
    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            if (element !== null && typeof element.style !== 'undefined') {
                element.style.transform = `translateX(${-window.pageYOffset}px)`;
                if (yinyang.current !== null && typeof yinyang.current.style !== 'undefined') {
                    return (yinyang.current.style.transform =
                        "rotate(" + -window.pageYOffset + "deg)");
                }
            }
            
            

           
        };

        window.addEventListener("scroll", rotate);
        return () => {
            window.removeEventListener("scroll", rotate);
        };
    }, []);

    return (<Box>
         <ParticlesBG/>
        <Main ref = {ref} variants = {container} initial = "hidden" animate = "show" > {
            Work.map((d) => ( 
                <Card key = {d.id} data = {d}/>
            ))
        }</Main>
         </Box>
    );
};

export default WorkPage;