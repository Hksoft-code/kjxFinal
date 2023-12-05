import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import phone from '../assets/otherImage/Identity-Verifications-Page-Row1.png'

const Phone_verication_Api = () => {
  return (
    <>
            <HeroPage 
            h1="Phone Verification API"
            p="These are only a few advantages of utilizing phone verification APIs. They make it abundantly clear why verification APIs are so popular and how they quickly return on investment. Utilizing a precise and trustworthy service can revolutionize your entire marketing and communication strategy, going beyond just validating phone numbers."
            start="Next Gen"
            colored="Phone Verification API Developer"
            end="Beside Professional Excellence!"
            img={phone}
            />

            <About
            dis="none"
            sub_description=""
            title="Phone Verification API"
            sub_title="About Phone Verification API"
            description="One of KjxSoftTech' best offerings is the Phone Verification API, which aids in the verification of the numbers. Even though the work is completed at a rapid pace, specialized experts are present.

            Numerous industries use phone verification to ensure that the client-provided number is real and functional. Additionally, it can be used to confirm the client's identity. Besides that, even though it might seem like a lot of internal information to divulge, it's critical to understand that the primary purpose of phone verification is to safeguard your account. Your phone number being used for other purposes is extremely unlikely."
            />

            <Team 
            text="Want to Hire Phone Verification API Expert?" 
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

export default Phone_verication_Api