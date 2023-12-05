import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import machine from '../assets/servicesImage/machine-learning.png'

const Machine_Learning_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Machine Learning Developers"
            p="Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.Recommendation engines are a common use case for machine learning. Other popular uses include fraud detection, spam filtering, malware threat detection, business process automation (BPA) and Predictive maintenance."
            start="Next Gen"
            colored="Machine Learning"
            end="Beside Professional Excellence!"
            img={machine}
            />

            <About
            dis="none"
            sub_description=""
            title="Machine Learning"
            sub_title="About Machine Learning"
            description="Machine learning is a subfield of artificial intelligence (AI) and computer science that uses data and algorithms to mimic how humans learn, continually improving its precision. Hire a machine learning developer today from us, as they will incorporate machine learning in your business to reduce the time of data analysis. Get your customers a service they never imagined."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Predictive Analytics"
            p2="AI Process Automation"
            p3="AI Powered Chatbots"
            p4="AI-Based User Behavior Analysis"
            p5="Marketing Automation Solution"
            p6="Neural Network Development"
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

export default Machine_Learning_Developers