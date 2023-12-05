import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import orm from '../assets/otherImage/Online-Reputation-Management.png'

const ORM_Experts = () => {
  return (
    <>
            <HeroPage 
            h1="Hire ORM Expert"
            p="KjxSoftTech understands that your goodwill is your biggest asset and hence we assure to maintain your Online Reputation and decrease the consumer churn rate."
            start="Next Gen"
            colored="ORM Expert"
            end="Beside Professional Excellence!"
            img={orm}
            />

            <About
            dis="none"
            sub_description=""
            title="ORM"
            sub_title="About ORM"
            description="Your Online Reputation Management is most important these days. It impacts your business revenue and brand value. Each large company in this present reality has faith in the significance of keeping a positive picture of its business."
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

export default ORM_Experts