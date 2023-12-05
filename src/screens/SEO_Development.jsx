import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import seo from '../assets/otherImage/seo.png'

const SEO_Development = () => {
  return (
    <>
           <HeroPage 
            h1="Hire SEO Expert"
            p="SEO is one of the most authentic ways to take your business to the sky, and We, at KjxSoftTech ace at providing SEO services that help brands to stay one step ahead of their competitors."
            start="Next Gen"
            colored="SEO Expert"
            end="Beside Professional Excellence!"
            img="https://avioxtechnologies.com/static/images/seo_brand.png"
            />

            <About
            dis="none"
            sub_description=""
            title="SEO"
            sub_title="About SEO"
            description="You might have the most costly site in your industry, however without web traffic to that site, it is basically pointless. Our SEO experts will guide you through the latest SEO updates and increase your ranking in Google search results."
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

export default SEO_Development