import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import machine from '../assets/servicesImage/machine-learning.png'

const Machine_Learning = () => {
  return (
    <>
            <HeroPage 
            h1="Machine Learning"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Machine Learning"
            end="Beside Professional Excellence!"
            img={machine}
            />

            <About
            dis="none"
            sub_description=""
            title="ML"
            sub_title="About Machine Learning "
            description="Without being pattern recognition to do so, machine learning enables software applications to improve their propensity for outcome prediction. In order to forecast new output values, ml algorithms use chronological data as input. KjxSoftTech are the best place to hire a machine learning developer for your business."
            />

            <Team 
            text="Want to Hire Machine Learning Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of Machine Learning"
            />

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Machine_Learning