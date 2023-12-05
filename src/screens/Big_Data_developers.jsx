import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Big_Data_developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Big Data Developers"
            p="Hire Big Data Developers that are proficient in core scripting languages and responsible for the actual coding or programming of big data applications."
            start="Next Gen"
            colored="Big Data"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/bigdata.png"
            />

            <About
            dis="none"
            sub_description=""
            title="Big Data"
            sub_title="About Big Data"
            description="AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.
            
            AngularJS is what HTML would have been, had it been designed for applications. HTML is a great declarative language for static documents. It does not contain much in the way of creating applications, and as a result building web applications is an exercise in what do I have to do to trick the browser into doing what I want?"
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Data mining"
            p2="Predictive analytics"
            p3="Quantitative analysis"
            p4="Data visualization"
            p5="Problem Solving"
            p6="Computational Frameworks"
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

export default Big_Data_developers