import HeroPage from "../component/ui/heroPage"
import Team from "../component/ui/team"
import Platforms from "../component/ui/platforms"
import Process from "../component/ui/process"
import MoreServices from "../component/ui/services/moreService"
import OurServices from "../component/ui/services/ourServices"
import services from '../assets/services.png'


const Services = () =>{
    return(
        <>
            <HeroPage img={services} c=" Responsive Web Design " h="Next Gen" br="Beside Professional Excellence!" p="We strive to provide elegant solutions built on proven methodologies. Kjxsoftech technologies partner with clients to design and develop the preeminent creative solutions on numerous reliable platforms."/>
            <Platforms span="Common Platforms"/>
            <OurServices/>
            <Process/>
            <MoreServices/>
            <Team text="Want to Hire UI/UX Expert?" disc="We create smarter apps for smarter businesses." bt="Hire Now!"/>
        </>
    )
}
export default Services;