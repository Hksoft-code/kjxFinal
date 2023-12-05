import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Kafka_developers = () => {
  return (
    <>
    <HeroPage 
    h1="Hire Kafka Developers"
    p="Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds."
    start="Next Gen"
    colored="Kafka"
    end="Beside Professional Excellence!"
    img="https://avioxtechnologies.com/static/images/kafka.png"
    />

    <About
    dis="none"
    sub_description=""
    title="Kafka"
    sub_title="About Kafka"
    description="We can use Kafka to automate data collection from different parts of the organization for ingestion into our database. Axios' Data Platform team uses Kafka to stream real-time data from your products into a data lake, where you can run exploratory queries to better understand your data and help you in building machine learning models. So it’s best to hire a Kafka developer from us as we only have experts in our team."
    />

    <Team 
    text="Want to Hire Developers?" 
    disc="We create smarter apps for smarter businesses." 
    bt="Hire Now!"
    />

    <Expertise
    p1="Custom iOS app development"
    p2="Mobile Device Management (MDM)"
    p3="Intelligent BOT and Chat App"
    p4="Real Time Audio Video Streaming Apps"
    p5="Ondemand Delivery Apps"
    p6="eCommerce App"
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

export default Kafka_developers