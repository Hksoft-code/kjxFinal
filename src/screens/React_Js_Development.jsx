import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import react from '../assets/react_brand.png'

const React_Js_Development = () => {
  return (
    <>
            <HeroPage 
            h1="React JS Developement"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="React JS Developer"
            end="Beside Professional Excellence!"
            img={react}
            />

            <About
            dis="none"
            sub_description=""
            title="React JS"
            sub_title="About React JS"
            description="KJX-SoftTech technologies offer ReactJS developer services. This is the current trend on webpages and is used by most websites. React JS has numerous advantages.

            Let's look at the main advantages of React JS to see why it's superior to other front-end frameworks."
            />

            <Team 
            text="Want to Hire React JS Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits/>

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default React_Js_Development