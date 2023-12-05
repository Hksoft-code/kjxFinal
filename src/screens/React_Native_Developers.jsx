import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import reactNative from '../assets/servicesImage/React-Native-Apps.png'

const React_Native_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire React Native Developers"
            p="KjxSoftTech excels in delivering the applications with the least possible time. Being a leading React Native app development company, we follow incredibly sophisticated methods and approaches in successfully deploying hundreds of innovative solutions globally."
            start="Next Gen"
            colored="React Native Developement"
            end="Beside Professional Excellence!"
            img={reactNative}
            />

            <About
            dis="none"
            sub_description=""
            title="React Native"
            sub_title="About React Native"
            description="Why don't you move beyond Android and iOS? Our app developers also have expertise in React Native. Hire React native developer who combines the best of Native and React to deliver exciting new projects without sacrificing user experience."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="React Native Cross-Platform App Development"
            p2="React Native iOS App Development"
            p3="React Native Android App Development"
            p4="React Native Integration"
            p5="React Native Update, Support, and Maintenance"
            p6="React Native App Consultancy"
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

export default React_Native_Developers