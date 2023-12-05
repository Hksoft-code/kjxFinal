import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import vue from "../assets/vue_brand.png"

const Vue_Js_Developement = () => {
  return (
    <>
            <HeroPage 
            h1="Vue JS Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Vue JS Developer"
            end="Beside Professional Excellence!"
            img={vue}
            />

            <About
            dis="none"
            sub_description=""
            title="Vue"
            sub_title="About Vue JS"
            description="KjxSoftTech offers the best Vue JS developer for your needs. A dependable and progressive framework is required when developing a dynamic web user interface. Among many various JavaScript frameworks for web applications, Vue.js stands out as a popular choice among programmers and a business favorite as a progressive JavaScript framework.

            What are the benefits of hiring a Vus JS developer? They provide numerous advantages to your company, including"
            />

            <Team 
            text="Want to Hire Vue JS Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of Vue JS"
            />

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Vue_Js_Developement
