import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import node from '../assets/node_logo.png'

const Node_Js_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Node JS Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Node JS Developer"
            end="Beside Professional Excellence!"
            img={node}
            />

            <About
            dis="none"
            sub_description=""
            title="Node Js"
            sub_title="About Node Js"
            description="Node.js is a cross-platform open-source default setting for developing server-side and networking applications. Node.js apps are designed in JavaScript, and they can be run on OS X, Microsoft Windows, and Linux using the Node.js runtime. KjxSoftTech provides NodeJS developers to assist you in growing your brand and establishing an online presence. Hire Node Js developers today and reap the benefits for your company."
            />

            <Team 
            text="Want to Hire Node Js Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits Of Node JS"
            /> */}

           {/* <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Node_Js_Development