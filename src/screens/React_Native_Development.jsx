import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import reactNative from '../assets/servicesImage/React-Native-Apps.png'

const React_Native_Development = () => {
  return (
    <>
            <HeroPage 
            h1="React Native Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="React Native Developer"
            end="Beside Professional Excellence!"
            img={reactNative}
            />

            <About
            dis="none"
            sub_description=""
            title="React Native"
            sub_title="About React Native"
            description="KjxSoftTech offers the best React Native developer for your needs. A dependable and progressive framework is required when developing a dynamic web user interface. Among many various JavaScript frameworks for App applications, React Native stands out as a popular choice among programmers and a business favorite as a progressive JavaScript framework.

            What are the benefits of hiring a React Native developer? They provide numerous advantages to your company, including"
            />

            <Team 
            text="Want to Hire React Native Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of React Native"
            />

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default React_Native_Development