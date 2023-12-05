import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Azure_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Microsoft Azure Developers"
            p="Achieve the agility, reliability, scalability, and protection that the following technology of programs needs with a cloud-local architecture. Hire Azure Developers and transform your cloud based apps."
            start="Next Gen"
            colored="Microsoft Azure"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/azure.png"
            />

            <About
            dis="none"
            sub_description=""
            title="Azure"
            sub_title="About Microsoft Azure"
            description="The Azure cloud platform includes over 200 products and cloud services that are designed to assist you in bringing new solutions to life—to solve today's challenges and develop the future. Build, run, and manage applications across cloud environments, on-premises, and at the edge using your preferred tools and frameworks. Hire an Azure service developer to help you migrate your business to the cloud and build your own cloud-based application."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Develop with costs in mind"
            p2="Script your environments"
            p3="Create a monitoring and diagnostics pipeline"
            p4="Scale your applications"
            p5="Focus on building things with plumbing"
            p6="Develop for unpredictability"
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

export default Azure_Developers