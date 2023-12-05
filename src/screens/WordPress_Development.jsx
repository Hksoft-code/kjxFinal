import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import wordpress from '../assets/servicesImage/wordpress.png'

const WordPress_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Wordpress Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Wordpress Developer"
            end="Beside Professional Excellence!"
            img={wordpress}
            />

            <About
            dis="none"
            sub_description=""
            title="Wordpress"
            sub_title="About Wordpress"
            description="KjxSoftTech offers the best Wordpress developer for your needs. A dependable and progressive framework is required when developing a dynamic web user interface. Among many various JavaScript frameworks for web applications, Vue.js stands out as a popular choice among programmers and a business favorite as a progressive JavaScript framework.

            What are the benefits of hiring a Wordpress developer? They provide numerous advantages to your company, including"
            />

            <Team 
            text="Want to Hire Wordpress Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of WordpressS"
            />

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default WordPress_Development