import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import ios from '../assets/servicesImage/ios.png'

const IOS_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Ios Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Ios Developer"
            end="Beside Professional Excellence!"
            img={ios}
            />

            <About
            dis="none"
            sub_description=""
            title="Ios"
            sub_title="About Ios"
            description="KjxSoftTech offers the best Ios developer for your needs. A dependable and progressive framework is required when developing a dynamic Ios user interface. Among many various App frameworks for App applications, Ios stands out as a popular choice among programmers and a business favorite as a progressive JavaScript framework.

            What are the benefits of hiring a Ios developer? They provide numerous advantages to your company, including"
            />

            <Team 
            text="Want to Hire Ios Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of Ios"
            /> */}

           {/* <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default IOS_Development