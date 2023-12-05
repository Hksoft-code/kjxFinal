import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import android from "../assets/Android.png"

const Andriod_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Android Developers"
            p="Recruit devoted android application developers to take advantage of financially savvy application advancement and shape your business thoughts into beneficial assets. Our application specialists will lead you to the best choice for your business."
            start="Next Gen"
            colored="Android Application"
            end="Beside Professional Excellence!"
            img={android}
            />

            <About
            dis="none"
            sub_description=""
            title="Android"
            sub_title="About Android Application"
            description="Android is the platform that is used by the majority of the population. So now think about having an app on this platform to boast about your business. Hire android developers who are experts on this platform. We have 5+ years of experience in this field."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Enterprise Android App"
            p2="On-Demand Delivery App"
            p3="Social Networking App"
            p4="Intelligent BOT and Chat App"
            p5="Internet of Things (IOT)"
            p6="Smart Wearable Apps"
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

export default Andriod_Developers
