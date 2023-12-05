import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import react from '../assets/react_brand.png'

const React_JS_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire React JS Developers"
            p="React.js developers plan and execute UI parts for JavaScript-based web and versatile applications utilizing the React open-source library. Plan basic perspectives for each state in your application, and React will effectively refresh and deliver the perfect parts when your information changes.."
            start="Next Gen"
            colored="React JS Developement"
            end="Beside Professional Excellence!"
            img={react}
            />

            <About
            dis="none"
            sub_description=""
            title="React JS"
            sub_title="React JS"
            description="Once learned, you can write anywhere. We use a declarative and component-based framework to create technologically advanced web apps with exceptional ULS. Hire a Reactjs developer today to make an advanced web app for your business."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Enterprise ReactJS Web Application"
            p2="ReactJS Support, Maintenance and Testing"
            p3="ReactJS Web Development Services"
            p4="UI Integration Existing App"
            p5="NodeJS API Binding in ReactJS"
            p6="Enterprise Hybrid Model using TypeScript with ReactJS"
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

export default React_JS_Developers