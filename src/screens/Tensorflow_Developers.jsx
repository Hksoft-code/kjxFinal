import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import tenser from '../assets/servicesImage/tensorflow-js.png'

const Tensorflow_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Tensorflow Developers"
            p="Our dedicated TensorFlow masters offer differentiable programming across a range of tasks by building intuitive data flow graphs, TensorFlow chatbots, OCR/ICR customized as per your software technology needs. TensorFlow helps you amplify business efficiencies by offering flexibility to work on multiple models."
            start="Next Gen"
            colored="Tensorflow Framework"
            end="Beside Professional Excellence!"
            img={tenser}
            />

            <About
            dis="none"
            sub_description=""
            title="Tensorflow"
            sub_title="About Tensorflow Framework"
            description="TensorFlow is a complete open-source machine learning platform. It has an extensive, adaptable ecosystem of tools, libraries, and support networks that enable researchers to push the boundaries of ML and developers to easily build and deploy ML-powered applications. We can provide you with a powerful ML application that will help your business to give a new perspective to move on. So hire a TensorFlow expert today from us."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Streamline Automation"
            p2="Voice & Sound Recognition"
            p3="TensorFlow Chatbots"
            p4="User Behavior Analysis"
            p5="Advanced Business Analytics"
            p6="Image Recognition"
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

export default Tensorflow_Developers