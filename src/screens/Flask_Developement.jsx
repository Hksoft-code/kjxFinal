import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import flask from '../assets/flask.webp'

const Flask_Developement = () => {
  return (
    <>
            <HeroPage 
            h1="Flask Development"
            p="KjxSoftTech provides you the best services in terms of their software as well as we even have a team of experts that aces at giving the best of any service and being the bridge that leads to the success as well."
            start="Next Gen"
            colored="Flask Development"
            end="Beside Professional Excellence!"
           img={flask}
            />

            <About
            dis="none"
            sub_description=""
            title="Flask"
            sub_title="About Flask"
            description="Flask is designed to be lightweight and adaptable to a wide range of development demands. It creates a web application base that may be extended in any way. It is cooperative with the google search engine. When creating a web application, Flask gives the necessary code to the developer. It enables you to launch a server, manage requests, handle templates, and do a lot more.

            Even though Flask is easy to learn, you should be familiar with Python before getting started. The best framework for serving light web applications is known as Flask. It is lightweight and can be helpful to developers who prefer a web interface to the built-in system UI."
            />

            <Team 
            text="Want to Hire Flask Expert?" 
            disc="We create smarter apps for smarter businesses" 
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

export default Flask_Developement
