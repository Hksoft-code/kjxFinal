import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import ios from '../assets/servicesImage/ios.png'

const IOS_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire IOS Developers"
            p="Enlist iOS application designer from KjxSoftTech to change your business with the goal that you can offer improved encounters to your clients/clients/clients. Obligations Design and make undeniable level iOS applications for cell phones."
            start="Next Gen"
            colored="IOS Application "
            end="Beside Professional Excellence!"
            img={ios}
            />

            <About
            dis="none"
            sub_description=""
            title="IOS"
            sub_title="About IOS"
            description="After all, iOS users are the second-largest market after Android users. So why don't you jump on the iOS platform too to increase your reach? We have a great experience with working on apps that work on one iOS platform. Hire an iOS developer from us. Our iOS app developer encompasses the creation of exceptional software applications for all Apple products."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Custom iOS app development"
            p2="Mobile Device Management (MDM)"
            p3="Intelligent BOT and Chat App"
            p4="Real Time Audio Video Streaming Apps"
            p5="Ondemand Delivery Apps"
            p6="eCommerce App"
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

export default IOS_Developers