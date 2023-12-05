import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import grafana from '../assets/grafana.png'

const Grafana_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Grafana Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Grafana Developer"
            end="Beside Professional Excellence!"
            img={grafana}
            />

            <About
            dis="none"
            sub_description=""
            title="Grafana"
            sub_title="About Grafana"
            description="We at KjxSoftTech enable all the key features of Grafana which helps to provide the key features of it such as Annotation which helps you to control the type of graph you want to make, So we provide you with all these facilities and there are several more facilities as well.

            No matter where your metrics are stored, Grafana enables you to query, visualize, receive alerts about, and comprehend them. Develop a data-driven culture by creating, exploring, and sharing stunning dashboards with your team.
            
            Since Grafana is an open-source program, we can create custom plugins for integrating it with a variety of data sources."
            />

            <Team 
            text="Want to Hire Grafana Expert?" 
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

export default Grafana_Development
