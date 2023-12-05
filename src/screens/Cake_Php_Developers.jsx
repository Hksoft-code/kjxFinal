import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import cakePhp from '../assets/cakephp-brands.png'

const Cake_Php_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire CakePHP Developers"
            p="CakePHP is without a doubt an extraordinary MVC based open source stage that assists you with getting quick, maintainable and exceptionally practical arrangements. The best thing about this framework is it offers developers a generally adaptable and thorough arrangement of elements to act quickly close to fostering an answer with least possibilities of mistakes."
            start="Next Gen"
            colored="CakePHP Framework"
            end="Beside Professional Excellence!"
            img={cakePhp}
            />

            <About
            dis="none"
            sub_description=""
            title="CakePHP"
            sub_title="About CakePHP Framework"
            description="Our skilled professional creates and delivers a feature-rich and visually appealing solution for your digital needs using the CakePHP Framework. Take your business to new heights with this contemporary CakePHP framework and get the best results from the comfort of your own home. Hire a CakePHP developer today from us to reach new heights."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Custom CakePHP Web Development"
            p2="Migration & Upgradation"
            p3="Enterprise ERP Development"
            p4="Restful App Development"
            p5="Custom CRM Development"
            p6="CakePHP Enterprise Application Development"
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

export default Cake_Php_Developers