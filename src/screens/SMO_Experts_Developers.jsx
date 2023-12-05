import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import smo from '../assets/otherImage/smo.png'

const SMO_Experts_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire SMO Expert"
            p="To stay in contact and to acknowledge your customer's demand, you need to present your brand through Social Media Optimization. Our team of experts at KjxSoftTech not only helps you to build your presence but reach out to the right audience as well."
            start="Next Gen"
            colored="SMO Expert"
            end="Beside Professional Excellence!"
            img={smo}
            />

            <About
            dis="none"
            sub_description=""
            title="SMO"
            sub_title="About SMO"
            description="Our SMO Experts help businesses improve their online presence, reach to the targeted network and market their brands and products in the most effective ways. We will handle all your social media profiles and make your reach better to your audience."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Custom Web Development"
            p2="SaaS Development"
            p3="Flask Product Development"
            p4="Flask Integration & Migration"
            p5="Back-end Development"
            p6="Flask Product Development"
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

export default SMO_Experts_Developers