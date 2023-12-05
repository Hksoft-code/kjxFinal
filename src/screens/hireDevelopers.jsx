import styled from "styled-components"
import HeroPage from "../component/ui/heroPage"
import Welcome from "../component/ui/developerSection/welcome"
import Developer from "../component/ui/developerSection/developer"
import Scenario from "../component/ui/scenario's"
import Team from "../component/ui/team"
import Impression from "../component/ui/impression"
import Contact from "../component/ui/contact"

import about_img from "../assets/about-us.png"

const HireDevelopers = () =>{

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    

    return(
        <>
            <HeroPage img={about_img} c=" Responsive Web Design " h="Next Gen" br="Beside Professional Excellence!" p="We strive to provide elegant solutions built on proven methodologies. Kjxsoftech technologies partner with clients to design and develop the preeminent creative solutions on numerous reliable platforms."/>
            <Welcome/>
            <Team text="Want to hire developers?" disc="We develop smarter websites & business solutions." bt="Hire Now" fun={scrollToTop}/>
            <Developer/>
            <Scenario title="Welcome" sub_title="Hire Developers."/>
            <Impression text="Impressions" subtext="Our Global Impression"/>
            <Contact/>
        </>
    )
}
export default HireDevelopers;