import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import laravel from '../assets/laravel-brands.png'

const Laravel_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Laravel Development"
            p="We have a team of dedicated Laravel developers who are proficient in developing innovative apps with elegant design in a given interval of time. Laravel helps to secure the application by preserving the most serious security risks: SQL injection, cross-site request forgery, and cross-site scripting."
            start="Next Gen"
            colored="Laravel Development"
            end="Beside Professional Excellence!"
            img={laravel}
            />

            <About
            dis="none"
            sub_description=""
            title="Laravel"
            sub_title="About Laravel"
            description="Laravel is a PHP-based open-source web development framework. Laravel includes straightforward and elegant syntax. KjxSoftTech connect you with the best Laravel developer so that you can get the best webpage for your business needs.

            What are the benefits of hiring a Laravel developer for your business?"
            />

            <Team 
            text="Want to Hire Laravel Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits Of Laravel"
            /> */}

           {/* <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Laravel_Development