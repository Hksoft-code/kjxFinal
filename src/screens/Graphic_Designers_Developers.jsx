import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Graphic_Designers_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Graphic Designers"
            p="Supercharge your imaginative motor, step up your image personality, and take your business to a higher level. Make your persuasive visual presence for your image. It is exceptionally essential to get an ideal clear line of sight and feel of your image."
            start="Next Gen"
            colored="Graphic"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/Design%20Prototype.png"
            />

            <About
            dis="none"
            sub_description=""
            title="Graphic"
            sub_title="About Graphic"
            description="Graphic design will play an important role in the future of online marketing. We are the best in the graphic design industry as our team is knowledgeable in all aspects of graphic design; hire a graphic designer who will help your company thrive in the market."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Mobile UI Designing"
            p2="Wireframe Design"
            p3="Prototyping Services"
            p4="Logo Designing"
            p5="Cross Platform Designs"
            p6="Mockups"
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

export default Graphic_Designers_Developers