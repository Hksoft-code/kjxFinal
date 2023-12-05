import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import codeing from '../assets/servicesImage/codinater.png'

const Codigniter_Development = () => {
  return (
    <>
          <HeroPage 
            h1="Hire CodeIgniter Developers"
            p="Hire CodeIgniter Developer for your custom CodeIgniter web application advancement projects at spending plan amicable rates. Our engineers enjoy the rich-highlighted functionalities of the main PHP web framework. An expert CodeIgniter Development Company that gives web application improvement administrations to SME's, Digital Agencies, and Startups."
            start="Next Gen"
            colored="CodeIgniter"
            end="Beside Professional Excellence!"
            img={codeing}
            />

<About
            dis="none"
            sub_description=""
            title="CodeIgniter"
            sub_title="About CodeIgniter"
            description="Codelgniter is an effective PHP framework with a small footprint designed for developers looking for a simple and elegant toolkit for creating websites composed entirely of web applications. The Codelgniter frameworks provide you with a small footprint, exceptional performance, and a framework that requires nearly zero configurations. Yes, it has so many features. Hire our Codelgniter developer to enjoy all these features."
            />
              <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of Vue JS"
            /> */}

           {/* <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Codigniter_Development