import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import sopify from '../assets/servicesImage/shopify-integ.png'

const Shopify_Developers = () => {
  return (
    <>
            <HeroPage 
            h1="Hire Shopify Developers"
            p="Shopify is an ecommerce platform that you can use to build your store both online and offline. Bloggers use WordPress. Store owners use Shopify. It allows you to sell both online with your own website and/or in person with Shopify POS. This ecommerce website builder has features for everyone from beginners to ecommerce experts."
            start="Next Gen"
            colored="Shopify Development"
            end="Beside Professional Excellence!"
            img={sopify}
            />

            <About
            dis="none"
            sub_description=""
            title="Shopify"
            sub_title="About Shopify"
            description="Shopify is an e-commerce platform that allows businesses to manage their online stores. It is a viable alternative to opening physical stores in order to reach operations on a global scale. It enables you to boost both your sales and your reach while avoiding the growing pains associated with outlet expansion. Hire our Shopify developer to create your own Shopify eCommerce website"
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="Custom Design for Shopify Store"
            p2="Custom Shopify App Development"
            p3="3rd Party App Integrations and Design Changes"
            p4="Shopify API Integration"
            p5="Shopify Site Maintenance and Support"
            p6="Shopify Theme Design and Customization"
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

export default Shopify_Developers