import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import shipping from '../assets/servicesImage/shipping-api.png'

const Shipping_Api = () => {
  return (
    <>
            <HeroPage 
            h1="Shipping API"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Shipping API"
            end="Beside Professional Excellence!"
            img={shipping}
            />

            <About
            dis="none"
            sub_description=""
            title="Shipping API"
            sub_title="About Shipping API"
            description="Shipping API allows you to directly incorporate UPS shipping functionality into your business system or website. Your customers will value the breadth of UPS's services and capabilities, and your company will benefit from improved workflows.

            The Shipping API can be modified to fit the needs of your business. Generally, lower costs by enhancing mailroom efficiency and putting in place better shipping activity controls. Without the use of pricey hardware or software, the Shipping API can simplify your shipping.
            
            KjxSoftTech provides the best shipping API as we value our customer's demand as well as see the access of the retail stores, branch offices, and many others."
            />

            <Team 
            text="Want to Hire SHIPPING API Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits/>

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Shipping_Api