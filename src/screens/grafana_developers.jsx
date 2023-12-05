import React from 'react'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";

const Grafana_developers = () => {
  return (
    <>
    <HeroPage 
    h1="Hire Grafana Developers"
    p="Grafana allows you to query, visualize, alert on and understand your metrics no matter where they are stored. Create, explore, and share beautiful dashboards with your team and foster a data driven culture.The easiest way to get started is with Grafana Cloud, our fully composable observability stack."
    start="Next Gen"
    colored="Grafana"
    end="Beside Professional Excellence!"
    img="https://avioxtechnologies.com/static/images/grafana.png"
    />

    <About
    dis="none"
    sub_description=""
    title="Grafana"
    sub_title="About Grafana"
    description="Grafana is an open-source remedy for running data analytics, retrieving metrics that make sense of massive amounts of data, and monitoring our apps via cool customizable dashboards. Grafana connects to every possible data source, including databases such as Graphite, Prometheus, Influx DB, ElasticSearch, MySQL, PostgreSQL, and others. Hire a Grafana developer; they will recognize the significance of data and will assist you in analyzing your data in the simplest way possible using Grafana."
    />

    <Team 
    text="Want to Hire Developers?" 
    disc="We create smarter apps for smarter businesses." 
    bt="Hire Now!"
    />

    <Expertise
    p1="Interactive UI Development"
    p2="Website Development"
    p3="Social Networking App Development"
    p4="Product Development"
    p5="UI/UX Development"
    p6="Customization Services"
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

export default Grafana_developers