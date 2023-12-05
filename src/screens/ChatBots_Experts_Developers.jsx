import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import chatbot from '../assets/servicesImage/chatbot.png'

const ChatBots_Experts_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire ChatBots Experts"
            p="We help you to develop chatbots with your business to engage navigation and conversational and self abilities to learn for better client experience. We build brilliant Chatbots that demonstrate, chat and answer like humans."
            start="Next Gen"
            colored="ChatBots Experts"
            end="Beside Professional Excellence!"
            img={chatbot}
            />

            <About
            dis="none"
            sub_description=""
            title="ChatBots Experts"
            sub_title="About ChatBots Experts"
            description="Chatbot innovation has emerged as the leading trend in all industries. Chatbots are now commonplace in industries ranging from commercial banking to hospitality and online grocery delivery. Getting the desired ROI from a chatbot, on the other hand, necessitates expertise. That is why you must hire chatbot developers with the necessary skills. We have extensive knowledge and experience with chatbots and work with some of the best companies to provide a chatbot that meets their specific requirements."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Chatbot development frameworks"
            p2="Tone Recognition"
            p3="CRM Integration"
            p4="Trained"
            p5="AI/ML Algorithms"
            p6="Conversational Maturity"
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

export default ChatBots_Experts_Developers