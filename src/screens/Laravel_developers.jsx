import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import laravel from '../assets/laravel-brands.png'

const Laravel_developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Laravel Developers"
            p="We have a team of dedicated Laravel developers who are proficient in developing innovative apps with elegant design in a given interval of time. Laravel helps to secure the application by preserving the most serious security risks: SQL injection, cross-site request forgery, and cross-site scripting."
            start="Next Gen"
            colored="Laravel Development"
            end="Beside Professional Excellence!"
            img={laravel}
            />

            <About
            dis="none"
            sub_description=""
            title="Laravel"
            sub_title="About Laravel"
            description="The level has become a step easier with the release of Laravel development. We are supported by a dedicated team of Laravel developers who excel at creating innovative apps with elegant design at a rapid pace. With the rapid pace of development, our team will complete your project within the time frame. Your hired Laravel developers are the best in the world."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Laravel Enterprise Application Development"
            p2="Implementing PSR-4 and PSR-1 coding standards"
            p3="OWASP Secure Coding Practices"
            p4="Laravel Restful App Development"
            p5="Laravel Code Audit"
            p6="Laravel Extension Development"
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

export default Laravel_developers