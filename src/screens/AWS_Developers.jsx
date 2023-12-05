import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const AWS_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire AWS Developers"
            p="Hire AWS Developer having a variety of big data analytics and application services knowledge.AWS Developer has the chances of being the age defining a cloud service provider."
            start="Next Gen"
            colored="Amazon Web Services"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/aws.png"
            />

            <About
            dis="none"
            sub_description=""
            title="AWS"
            sub_title="About Amazon Web Services"
            description="AWS offers more services and features within those services than any other cloud provider, ranging from infrastructure technologies like compute, storage, and databases to emerging technologies like machine learning and artificial intelligence, data lakes and analytics, and the Internet of Things. This makes it faster, easier, and less expensive to migrate your existing applications to the cloud and build almost anything you can think of. Hire an AWS developer, who will assist you in meeting your objectives at breakneck speed."
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

export default AWS_Developers