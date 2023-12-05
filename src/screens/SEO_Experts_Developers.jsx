import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const SEO_Experts_Developers = () => {
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

            <Expertise
            p1="Custom Web Development"
            p2="SaaS Development"
            p3="Flask Product Development"
            p4="Flask Integration & Migration"
            p5="Back-end Development"
            p6="Flask Product Development"
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

export default SEO_Experts_Developers