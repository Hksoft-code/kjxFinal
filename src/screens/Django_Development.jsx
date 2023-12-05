import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import django from '../assets/Django.png'

const Django_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Django Developers"
            p="We have an experienced team of efficient developers utilizing the colossal assortment of libraries offered by the Django web framework and strive to develop creative web solutions. With the expertise of our Django developers, get the customized Django development solutions."
            start="Next Gen"
            colored="Django"
            end="Beside Professional Excellence!"
            img={django}
            />

            <About
            dis="none"
            sub_description=""
            title="Django"
            sub_title="About Django"
            description="Django is a Python web framework that allows for the rapid development of secure and maintainable websites. Django, created by experienced developers, takes care of much of the hassle of web development, allowing you to focus on writing your app instead of reinventing the wheel. Hire Django developers, we use Django on your web page for fast processing, and we can offer rapid development on your web page as needed."
            />

            <Team 
            text="Want to Hire Developers?" 
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

export default Django_Development
