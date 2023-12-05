import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import tenser from '../assets/servicesImage/tensorflow-js.png'

const TensorFlow_Development = () => {
  return (
    <>
            <HeroPage 
            h1="TensorFlow Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Machine Learning"
            end="Beside Professional Excellence!"
            img={tenser}
            />

            <About
            dis="none"
            sub_description=""
            title="TensorFlow"
            sub_title="About TensorFlow"
            description="Data flow graph structures that depict how data flows throughout a graph or a collection of processing nodes can be created by developers using TensorFlow. No, regardless of the language you use, TensorFlow offers a collection of workflows for developing and training models in Python or JavaScript, as well as for quickly deploying them in the cloud, on-premises, in the browser, or on devices.

            One of the best services provided by KjxSoftTech is tensor flow development, which can be used by the majority of programmers to solve real-time problems."
            />

            <Team 
            text="Want to Hire Machine Learning Expert?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            {/* <TitleBenefits  
              sub_title="Benefits of Machine Learning"
            />

           <Benefits/> */}

           <Process/>
            
            <MoreServices/>

            <Contact/>
            
          
        </>
  )
}

export default TensorFlow_Development