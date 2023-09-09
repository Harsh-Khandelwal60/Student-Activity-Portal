import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// import Bolb from "./Bolb";

const Intro = () => {
  return (
    <div>
      <IntroTag>
        <motion.div
          className="intro"
          whileHover={{ scale: 1, y: 0 }}
          whileTap={{ scale: 1, y: 0 }}
        >
          
          <h1>Student Activity Council</h1>
          <p>
          By planning various events on campus, the Student Activity Council assists students in developing the abilities, attitudes, and resources necessary to excel in the college setting as well as to pursue successful and fulfilling lives. By promoting the intellectual, emotional, social, and professional growth of the whole campus community, Our Society aims to support the Institute's overall educational purpose.
          <br />
          <br /></p>
        </motion.div>
      </IntroTag>
    </div>
  );
};




const IntroTag = styled.div`
  margin-top: 2%;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
    /* background: rgba(0,0,0,0);
    backdrop-filter: blur(3rem); */
  /* max-height: 120vh; */

 

  .intro {
    /* background-color: rgba(0,0,0,0.06); */
    background-color: #fff;
    margin: 3rem auto;
    margin-bottom: 2rem;
    padding: 0rem 3rem;
    border-radius: 5px;
    width: 65%;
    height: fit-content;
    align-items: center;
    font-size: 1.4rem;
    color: #00293A;
    box-shadow:rgba(255, 255, 255, 0.18) 0px 4px 20px 7px;
    z-index: 10;
    transition: 10ms ease-in-out;
    
  }
  @media (max-width:1000px){
    .intro{
      width:84%;
    }
  }
  @media (max-width:600px){
    .intro{
      width:86%;
      padding:0px;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
  }
  .intro h1{
    line-height: 1;
    color: #028D93;
    font-weight: 700;
  }
  .intro p{
    text-align: center;
    overflow: hidden;
  }
`
export default Intro;
