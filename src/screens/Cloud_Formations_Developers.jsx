import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Cloud_Formations_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Cloud Formation Developers"
            p="AWS Cloud Formation empowers you to make and provision AWS framework deployments typically and over and over. AWS Cloud Formation is the most ideal way to compose, convey and keep up with your AWS Infrastructure. It gives developers and systems administrators a simple method for making and deal with an assortment of related AWS assets."
            start="Next Gen"
            colored="Cloud Formation"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/cloud_formation.png"
            />

            <About
            dis="none"
            sub_description=""
            title="Cloud Formation"
            sub_title="About Cloud Formation"
            description="Cloud Formation is a service that assists you in modeling and configuring your AWS resources so that you can spend less time managing them and more time focusing on your AWS-hosted applications. Hire a cloud formation developer from us today for the service of cloud formation"
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="AWS Management Services"
            p2="AWS Security and Governance"
            p3="Serverless Application with AWS Lambda"
            p4="AWS Machine Learning and AI"
            p5="AWS Monitoring and Logging"
            p6="Develop API using AWS API gateway"
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

export default Cloud_Formations_Developers