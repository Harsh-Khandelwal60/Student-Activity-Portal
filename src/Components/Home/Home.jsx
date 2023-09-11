import React from 'react'
import FAQ from './FAQ'
import Hblog from './Hblog'
import HeroNew from './Hero/HeroNew'
import HEvents from './HEvents'
import styled, { StyledComponent } from 'styled-components'
import HIntro from './HIntro'
import Footer from '../Footer/Footer'
import ScrollToTopH from '../ScrollToTopH'




const HomeTag = styled.section`
  position: relative;
  margin-top: 8vh;
  min-height: 92vh;
  background: #fff;
`
const Home = () => {
  return (
    <HomeTag>
       
        <HeroNew/>
        <HIntro/>
        <ScrollToTopH/>
        <HEvents/>
        <Hblog/>
        <FAQ/>
        <Footer/>
    
    </HomeTag>
  )
}

export default Home
