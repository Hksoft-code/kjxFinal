import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import fast  from '../assets/fast.png'

const Fast_api_developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire FastAPI Developers"
            p="Fastapi offers a wide range of applications in the creation and design of web applications. It is a modern, high-performance framework that allows developers to construct apps using the REST (Representational State Transfer) protocol."
            start="Next Gen"
            colored="FastAPI"
            end="Beside Professional Excellence!"
            img={fast}
            />

            <About
            dis="none"
            sub_description=""
            title="FastAPI"
            sub_title="About FastAPI"
            description="FastAPI is a modern, fast (high-performance) web framework for creating Python 3.6+ APIs using standard Python-type hints. You can hire our FastAPI developer to fulfill your needs and requirements, and we are sure we will not let you down."
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

export default Fast_api_developers
