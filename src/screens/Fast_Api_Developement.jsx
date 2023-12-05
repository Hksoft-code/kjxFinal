import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import fast  from '../assets/fast.png'

const Fast_Api_Developement = () => {
  return (
    <>
            <HeroPage 
            h1="FastAPI Development"
            p="As we have experts who give excellent finishing to the processing before it has been handled properly and as KjxSoftTech gives excellent development to the Fast API, they offer the best of their Fast API development services."
            start="Next Gen"
            colored="FastAPI Developer"
            end="Beside Professional Excellence!"
             img={fast}
            />

            <About
            dis="none"
            sub_description=""
            title="FastAPI"
            sub_title="About FastAPI"
            description="It is simple to produce high-quality products more quickly with good programming language frameworks. Excellent frameworks even enhance the overall enjoyment of the development process. An innovative Python web framework called FastAPI is robust and fun to use.

            FastAPI is a cutting-edge, quick (elevated), web framework for developing APIs. Since it is asynchronous, ASGI, also known as the Asynchronous Server Gateway Interface, is a web server that FastAPI uses. Therefore, if a large number of requests come in, they won't be alive for the others to finish processing before being handled."
            />

            <Team 
            text="Want to Hire FastAPI Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits/> */}

           {/* <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default Fast_Api_Developement
