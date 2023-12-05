import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Expertise from "../component/ui/detailSection/expertise"
import Scenario from "../component/ui/scenario's"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact";
import django from '../assets/Django.png'

const Detail = () =>{
    return(
        <>
            <HeroPage 
            h1="Hire Django Developers"
            p="We have an experienced team of efficient developers utilizing the colossal assortment of libraries offered by the Django web framework and strive to develop creative web solutions. With the expertise of our Django developers, get the customized Django development solutions."
            start="Next Gen"
            colored="Django"
            end="Beside Professional Excellence!"
            img={django}
            />

            <About
            dis="none"
            sub_description=""
            title="Django"
            sub_title="About Django"
            description="Django is a Python web framework that allows for the rapid development of secure and maintainable websites. Django, created by experienced developers, takes care of much of the hassle of web development, allowing you to focus on writing your app instead of reinventing the wheel. Hire Django developers, we use Django on your web page for fast processing, and we can offer rapid development on your web page as needed."
            />

            <Team 
            text="Want to Hire Developers?" 
            disc="We create smarter apps for smarter businesses." 
            bt="Hire Now!"
            />

            <Expertise
            p1="System Programming in Python"
            p2="Rapid Prototyping"
            p3="GUI Skills"
            p4="Outperforming Developer Skills"
            p5="Multi-threading support"
            p6="Extremely Secure"
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
export default Detail;