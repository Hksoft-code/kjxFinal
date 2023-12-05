import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import orm from '../assets/otherImage/Online-Reputation-Management.png'

const ORM_Services_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Hire ORM Expert"
            p="KjxSoftTech understands that your goodwill is your biggest asset and hence we assure to maintain your Online Reputation and decrease the consumer churn rate."
            start="Next Gen"
            colored="ORM Expert"
            end="Beside Professional Excellence!"
            img={orm}
            />

<About
            dis="none"
            sub_description=""
            title="ORM"
            sub_title="About ORM"
            description="Your Online Reputation Management is most important these days. It impacts your business revenue and brand value. Each large company in this present reality has faith in the significance of keeping a positive picture of its business."
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

export default ORM_Services_Development