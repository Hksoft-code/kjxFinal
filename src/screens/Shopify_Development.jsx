import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import sopify from '../assets/servicesImage/shopify-integ.png'

const Shopify_Development = () => {
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

export default Shopify_Development