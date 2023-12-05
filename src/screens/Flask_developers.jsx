import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import flask from '../assets/flask.webp'

const Flask_developers = () => {
  return (
    <>
    <HeroPage 
    h1="Hire Flask Developers"
    p="Flask Framework is a powerful Python web application framework that is usually known as a micro-framework as it focuses on getting a few things right and the rest it leaves to you. Flask is a minimal web framework usually used in simpler web application solutions keeping the core of solutions as simple and expandable."
    start="Next Gen"
    colored="Flask"
    end="Beside Professional Excellence!"
    img={flask}
    />

    <About
    dis="none"
    sub_description=""
    title="Flask"
    sub_title="About Flask"
    description="Everyone needs their web page to be compatible with the latest technology and have scalability for simple applications. So we got a solution for that. Hire a Flask developer who has knowledge of Flask, which will help you to provide a web page that is compatible with all the latest technology."
    />

    <Team 
    text="Want to Hire Developers?" 
    disc="We create smarter apps for smarter businesses." 
    bt="Hire Now!"
    />

    <Expertise
    p1="Custom Web Development"
    p2="SaaS Development"
    p3="Flask Product Development"
    p4="Flask Integration & Migration"
    p5="Back-end Development"
    p6="Flask Product Development"
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

export default Flask_developers
