import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import chatbot from '../assets/servicesImage/chatbot.png'

const ChatBots = () => {
  return (
    <>
            <HeroPage 
            h1="Chatbot"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Chatbot"
            end="Beside Professional Excellence!"
            img={chatbot}
            />

            <About
            dis="none"
            sub_description=""
            title="Chatbot"
            sub_title="About Chatbot"
            description="A chatbot's goal is to have a discussion with a mortal using text or audio. Chatbots can respond to questions and lead conversations because they mimic how an individual would act in a conversation.

            One of the best services offered by KjxSoftTech is their chatbot, which enables customers to receive the correct solutions without the use of artificial intelligence. Kindly give it a try as it is one of kjxsofttech Technologies' best services."
            />

            <Team 
            text="Want to Hire Chatbot Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of Chatbot"
            /> */}

           {/* <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default ChatBots