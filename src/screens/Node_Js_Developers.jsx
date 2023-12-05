import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import node from '../assets/node_logo.png'

const Node_Js_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Node JS Developers"
            p="We guarantee best execution when you enlist a specialist NodeJS developers from KjxSoftTech for building solid backend and APIs for your endeavor stage. Hire NodeJS developers today to guarantee the right innovation choice for your task."
            start="Next Gen"
            colored="Node JS Development"
            end="Beside Professional Excellence!"
            img={node}
            />

            <About
            dis="none"
            sub_description=""
            title="Node JS"
            sub_title="About Node JS"
            description="A good web page has a high response speed and can work cross-platform with ease. If you think about it, we've got you covered. You can hire NodeJS developers to fulfill your needs for these web pages."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Node JS Serverless framework APP development"
            p2="Enterprise Backend Development"
            p3="Rest API Development in NodeJS"
            p4="Real-time Node JS development for Chat & Data Streaming."
            p5="Building Custom Micro-Services"
            p6="Node JS Plugin, Package & API development"
            />

            <Scenario 
            title="Our Scenario’s" 
            sub_title="We Work In 3 Scenario’s"
            />

            <Contact/>
            
            <Impression 
            text="Impressions" 
            subtext="Our Global Impression"/>
        </>
  )
}

export default Node_Js_Developers