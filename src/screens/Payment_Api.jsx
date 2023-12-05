import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import paymentApi from '../assets/servicesImage/payment-api.png'

const Payment_Api = () => {
  return (
    <>
            <HeroPage 
            h1="Payment Api"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Payment Api"
            end="Beside Professional Excellence!"
            img={paymentApi }
            />

            <About
            dis="none"
            sub_description=""
            title="Payment Api"
            sub_title="About Payment Api"
            description="Payment API enables the smooth management of the payment by e-commerce companies. Due to their ability to speed up and secure transactions, the billing API has the potential to optimize the bill payment process for both firms as well as the customers.

            In order to manage the security of their transactions, KjxSoftTech offers its clients the best possible open API. Now let's examine the main features of the Payment API."
            />

            <Team 
            text="Want to Hire Payment Api Expert?" 
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

export default Payment_Api