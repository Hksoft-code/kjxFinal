import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Automation_QA_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Automation QA Developers"
            p="We create a detailed, multi-step test plan to ensure that you get the best out of the automated testing. We use a variety of tools to provide precise testing that can improve your ROI. Hire Automation QA from KjxSoftTech and fix all your testing problems."
            start="Next Gen"
            colored="Automation QA"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/automated_testing.png"
            />

            <About
            dis="none"
            sub_description=""
            title="Automation QA"
            sub_title="About Automation QA"
            description="You have limited time to fix your application's bugs and don't want to spend too much money. Contact our skilled team of automated testers if you need to remove issues from your software or website or if you want to check that your application functions properly and without mistakes. Hire an automated QA who can save you time and money by assisting you as efficiently as possible."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Enterprise Process Automation"
            p2="Resource Utilization"
            p3="Mobile Test Automation"
            p4="Software Testing Automation"
            p5="Multi-Platform Testing"
            p6="Automation Tools & Frameworks"
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

export default Automation_QA_Developers