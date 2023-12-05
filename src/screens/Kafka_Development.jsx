import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import kafka from '../assets/kafka.png'

const Kafka_Development = () => {
  return (
    <>
            <HeroPage 
            h1="Kafka Development"
            p="With the increasing trends, we offer a full stack of creative design services to cater to your business needs. Get hold of the best creative solutions for all your business needs and make your success online with us."
            start="Next Gen"
            colored="Kafka Developer"
            end="Beside Professional Excellence!"
            img={kafka}
            />

            <About
            dis="none"
            sub_description=""
            title="Kafka"
            sub_title="About Kafka"
            description="The best tools and services, such as Kafka Development, are provided by KjxSoftTech to assist their clients in receiving the best results from the software that we produce.

            Make sure the solutions are stable, perform at their best, and are highly available. Creates topics, establishes a redundant cluster, uses monitoring tools, deploys alerts, and is well-versed in best practices. To aid in the onboarding of applications from various languages and platforms, create stubs for producers, consumers, and consumer groups.
            
            Real-time streaming data refineries and applications that can adjust to the data streams are primarily built using Kafka. To enable the collection and processing of both historical and real-time data, it manages to combine messaging, storage, and parallel computing."
            />

            <Team 
            text="Want to Hire Kafka Expert?" 
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

export default Kafka_Development
