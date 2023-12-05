import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Hire_Manuel_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Manual QA"
            p="Quality Assurance is the most important part of the software development life cycle. We are CMMI level 3 in process company and implement agile testing services ensuring flawless product delivery. We are known as “antidote to typical” and so unlike traditional methods we don’t test start after development, we continuously test throughout the development duration, infact testing is an integral part of our software development."
            start="Next Gen"
            colored="Manual QA"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/manual_testing.png"
            />

            <About
            dis="none"
            sub_description=""
            title="Manual QA"
            sub_title="About Manual QA"
            description="KjxSoftTech offers a manual tester for your application to assist you in locating bugs and errors in your software. A manual tester is ideal for the job. Since they spend hundreds of hours using products, they have a more intuitive sense of how a piece of software feels to the user. That is enough reason for you to hire a manual QA developer."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Functionality & Usability testing"
            p2="Interface & Compatibility testingg"
            p3="Test cases DocumentationTest cases Documentation"
            p4="Implementing A/B Testing"
            p5="Implementing Unit Testing"
            p6="Performance Testing"
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

export default Hire_Manuel_Developers