import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact"

const Web_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Web Designers"
            p="With the advancement of technology you need to bring the best idea of your business to the world. Hire website designers from KjxSoftTech and give your brand identity that you are missing. We are ready to design your website."
            start="Next Gen"
            colored="Web Designers"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/Design%20Prototype.png"
            />

            <About
            dis="none"
            sub_description=""
            title="Web Design"
            sub_title="About Web Design"
            description="Our company's goal is to create a website that is not only magnificent but also responsive on any device. We are a leading responsive website design company that can make your site responsive. Get your business online and see it rise to the top with the assistance of our web developer. So, what are you waiting for? Hire a web developer from us today."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Responsive Web Design Services"
            p2="Feature-Rich And Advanced Web Design"
            p3="Highly Impressive and Professional Design"
            p4="Adaptive Web Design"
            p5="User Interface & Front-end Design"
            p6="Landing Page Redesign & Optimization"
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

export default Web_Developers