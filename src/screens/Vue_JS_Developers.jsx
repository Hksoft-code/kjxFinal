import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import vue from "../assets/vue_brand.png"

const Vue_JS_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Vue JS Developers"
            p="Documentation with Vue is so comprehensive knowing a little about JavaScript and HTML can develop an application or web page. Yet you need an expert developer to work with. Hire Vue Js developers from us and stay ahead in each situation."
            start="Next Gen"
            colored="Vue JS Developers"
            end="Beside Professional Excellence!"
            img={vue}
            />

            <About
            dis="none"
            sub_description=""
            title="Vue JS"
            sub_title="About Vue JS"
            description="The JavaScript framework is used to create user interfaces. It is built on top of standard HTML, CSS, and JavaScript. It provides a declarative and component-based programming model that allows you to efficiently develop simple or complex user interfaces. Hire a Vue js developer that will provide you with applications that are approachable and versatile as a result of this."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Custom Vue.js Development"
            p2="Vue.js Product Development"
            p3="Vue.js Development services"
            p4="Enterprise VueJS Apps"
            p5="Vue.js Data management"
            p6="Vue.js Migration & Integration"
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

export default Vue_JS_Developers
