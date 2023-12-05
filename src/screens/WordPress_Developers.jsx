import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import wordpress from '../assets/servicesImage/wordpress.png'

const WordPress_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Wordpress Developers"
            p="Among the favored improvement organizations for big business WordPress implementation we are driving WordPress development companies who give turning point administrations and all inclusive resources for all your plan, improvement and support business needs."
            start="Next Gen"
            colored="Wordpress Development"
            end="Beside Professional Excellence!"
            img={wordpress}
            />

            <About
            dis="none"
            sub_description=""
            title="Wordpress"
            sub_title="About Wordpress"
            description="As a company, we take pride in delivering unrivaled WordPress development services to clients all over the world. Our sole priority is to ensure that whatever your web development needs are, we can meet them with deftness using WordPress technology. Hire a WordPress developer today from us to enjoy the best WordPress services."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="WordPress Plugin Development"
            p2="Custom WordPress Theme Development and Customization"
            p3="WordPress Migration & Server Setup"
            p4="Wordpress Performance Optimization"
            p5="WordPress Multi-Sites development"
            p6="Custom Addons for the Elementor & Visual composer"
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

export default WordPress_Developers