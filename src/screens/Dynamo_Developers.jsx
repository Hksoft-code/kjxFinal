import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import dynamodb from '../assets/dynamodb.png'

const Dynamo_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire DynamoDB Developers"
            p="Amazon DynamoDB is a NoSQL data set that dispenses with the tasks and scaling of distributed data sets to determine issues like equipment provisioning, programming fixing, group scaling or arrangement and design."
            start="Next Gen"
            colored="DynamoDB"
            end="Beside Professional Excellence!"
            img={dynamodb}
            />

            <About
            dis="none"
            sub_description=""
            title="DynamoDB"
            sub_title="About DynamoDB"
            description="DynamoDB is an Amazon Aws database solution that enables data structures and key-valued cloud services. It provides users with auto-scaling, in-memory caching, backup, and restore options for all of their web apps that use DynamoDB. Why should your company fall behind? Hire a dynamo DB developer to help you stay ahead of your competitors."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="System Programming in Python"
            p2="Rapid Prototyping"
            p3="GUI Skills"
            p4="Outperforming Developer Skills"
            p5="Multi-threading support"
            p6="Extremely Secure"
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

export default Dynamo_Developers
