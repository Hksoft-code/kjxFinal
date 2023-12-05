import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import angular from "../assets/angular_brand.png"

const Angular_Js_Development = () => {
  return (
    <>
          <HeroPage 
            h1="Hire Angular JS Developers"
            p="AngularJS developers are talented JavaScript Developers who likewise have information and involvement in a few theoretical ideas of programming. Our professional AngularJs developer will help you out with all your problems."
            start="Next Gen"
            colored="Angular JS Developer"
            end="Beside Professional Excellence!"
            img={angular}
            />

            <About
            dis="none"
            sub_description=""
            title="Angular"
            sub_title="About Angular JS"
            description="A set of well-integrated libraries covering a wide range of features such as routing, forms management, client-server communication, and more. Capable of developing mobile and web apps which everyone's love. Hire an AngularJs developer today to take advantage of the best service we can offer for your website."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Custom Angular Development"
            p2="Single Page Application (SPA) Development"
            p3="Progressive Web Application (PWA)"
            p4="Angular Upgrade Service"
            p5="Custom Dashboard Development"
            p6="Code Audit in Angular Application"
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

export default Angular_Js_Development
