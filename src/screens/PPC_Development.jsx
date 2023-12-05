import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import ppc from '../assets/otherImage/ppc.png'

const PPC_Development = () => {
  return (
    <>
                <HeroPage 
            h1="Hire PPC Expert"
            p="Pay Per Click is the perfect way to multiply your investment. Let our team of experts at KjxSoftTech multiply your investment for every click."
            start="Next Gen"
            colored="PPC Expert"
            end="Beside Professional Excellence!" A
            img={ppc}
            />

<About
            dis="none"
            sub_description=""
            title="PPC"
            sub_title="About PPC"
            description="Advertising has changed to one of the most requesting and vital aspects of maintaining a business. This eventually implies that the general outcome of your business will rely for the most part upon the adequacy of your advertising campaign."
            />

<Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of Vue JS"
            />

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default PPC_Development