import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import smo from '../assets/otherImage/smo.png'

const SMO_Services_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Hire SMO Expert"
            p="To stay in contact and to acknowledge your customer's demand, you need to present your brand through Social Media Optimization. Our team of experts at KjxSoftTech not only helps you to build your presence but reach out to the right audience as well."
            start="Next Gen"
            colored="SMO Expert"
            end="Beside Professional Excellence!"
            img={smo}
            />

            <About
            dis="none"
            sub_description=""
            title="SMO"
            sub_title="About SMO"
            description="Our SMO Experts help businesses improve their online presence, reach to the targeted network and market their brands and products in the most effective ways. We will handle all your social media profiles and make your reach better to your audience."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />


            {/* <TitleBenefits  
              sub_title="Benefits of Vue JS"
            /> */}

           {/* <Benefits/>

           <Process/> */}
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default SMO_Services_Development