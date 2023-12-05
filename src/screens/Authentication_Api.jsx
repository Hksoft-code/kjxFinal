import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import auth from '../assets/servicesImage/auth.png'

const Authentication_Api = () => {
  return (
    <>
            <HeroPage 
            h1="Authentication Api"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Authentication Api"
            end="Beside Professional Excellence!"
            img={auth}
            />

            <About
            dis="none"
            sub_description=""
            title="Authentication Api"
            sub_title="About Authentication Api"
            description="KJX-SoftTech is aware of your needs and works to meet them by offering the best front-end development services possible for your company. The goal of an authentication API is to establish or confirm the legitimacy of system users. It involves using an application protocol to confirm that network clients are who they say they are before giving them access.

            The purpose of authentication API is to thwart attacks from online criminals who prowl websites looking for the smallest opening to exploit. It serves as a gatekeeper, allowing only legitimate users access.
            
            Using the Enhanced Security Authentication API is a quick and easy way to protect your account from numerous security breaches. Cybercriminals always find it more difficult to breach passwords or accounts after user authentication because there are more security checks they must go through."
            />

            <Team 
            text="Want to Authentication Api Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits/> */}

           {/* <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Authentication_Api