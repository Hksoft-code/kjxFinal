import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import ppc from '../assets/otherImage/ppc.png'

const PPC_Expert = () => {
  return (
    <>
            <HeroPage 
            h1="Hire PPC Expert"
            p="Pay Per Click is the perfect way to multiply your investment. Let our team of experts at KjxSoftTech multiply your investment for every click."
            start="Next Gen"
            colored="PPC Expert"
            end="Beside Professional Excellence!" A
            img={ppc}
            />

            <About
            dis="none"
            sub_description=""
            title="PPC"
            sub_title="About PPC"
            description="Advertising has changed to one of the most requesting and vital aspects of maintaining a business. This eventually implies that the general outcome of your business will rely for the most part upon the adequacy of your advertising campaign."
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

export default PPC_Expert