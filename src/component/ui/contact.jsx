import styled from "styled-components"
import ContactForm from "../form/contactForm"
import img from "../../assets/contact.png"
import {HiMail} from "react-icons/hi"
import {FaPhoneVolume} from "react-icons/fa"
import { useAuth } from "./Admin/AuthContext";
import {FaFacebook,FaXTwitter,FaInstagram,FaLinkedinIn,FaPinterestP,FaBehance} from "react-icons/fa6"
import indian from "../../assets/indiaflag.png"
import SendMessages from "./watsappMessage/sendMessage"
import WhatsApp from "../../assets/otherImage/watsapp.png"



const Contact = () =>{
    
    const { targetComponentsRef } = useAuth()

    return(
        <Section className="shadow-xl" ref={targetComponentsRef}>
            <Wrapper>
                <Title className='text-cyan-600'>Say Hello!</Title>
                <Holder>
                    <Text>
                        <H1>Let's Talk And Get Started</H1>
                        <Image src={img} alt="contact"/>
                        <HolderTwo>
                            <H2>
                                <Icon>
                                    <HiMail/>
                                </Icon>
                                Mail to our HR department
                            </H2>
                            <Span>
                               <span> 
                               hrdepartment@kjxsofttech.com
                                </span>
                            </Span>
                        </HolderTwo>
                        <HolderTwo>
                            <H2>
                                <Icon>
                                    <FaPhoneVolume/>
                                </Icon>
                                Please contact us at
                            </H2>
                            <Div>
                                <Span>
                                    <Number>
                                        <IconTwo src={indian} alt="flag"/>
                                        INDIA :<br/>
                                    </Number>
                                    <p>(+91) 9661087999</p>
                                </Span>
                            </Div>
                        </HolderTwo>
                        <Div2>
                            <a href="https://www.facebook.com/profile.php?id=61552777400770">
                            <FacebookIcon>
                               <FaFacebook />
                            </FacebookIcon>
                            </a>
                            <a href="https://twitter.com/KjxSofttec91960">
                            <TwitterIcon>
                               <FaXTwitter/>
                            </TwitterIcon>
                            </a>
                            <a href="https://www.instagram.com/kjx_soft_tech/">
                            <InstagramIcon>
                                <FaInstagram/>
                            </InstagramIcon>
                            </a>
                            <a href="https://www.linkedin.com/in/kjx-softtech-04265b297/">
                            <LinkedInIcon>
                                <FaLinkedinIn/>
                            </LinkedInIcon>
                            </a>
                            <a href="https://www.pinterest.com/KJX_Soft_Tech/">
                            <PinterestIcon>
                                <FaPinterestP/>
                            </PinterestIcon>
                            </a>
                        </Div2>
                    </Text>
                    <ContactForm/>
                    {/* <SendMessages /> */}
                   
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Contact;

const IconTwo = styled.img`
    width:40px;
    height:25px;
    margin-right:10px;
    object-fit:contain;
`

const Number = styled.div`
    display:flex;
    margin-bottom:10px;
`

const FacebookIcon = styled.div`
    width:35px;
    height: 35px;
    background-color: #4867AA;
    border-radius: 50%;
    margin-right: 5px;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;

    @media (min-width:767px){
        width:40px;
        height:40px;
        margin-left: 10px;
    }
`
const TwitterIcon = styled.div`
    width:35px;
    height: 35px;
    background-color: #1DA1F2;
    border-radius: 50%;
    margin-right: 5px;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;

    @media (min-width:767px){
        width:40px;
        height:40px;
        margin-left: 10px;
    }
`
const InstagramIcon = styled.div`
    width:35px;
    height: 35px;
    background-color: #EE3D5C;
    border-radius: 50%;
    margin-right: 5px;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;

    @media (min-width:767px){
        width:40px;
        height:40px;
        margin-left: 10px;
    }
`
const LinkedInIcon = styled.div`
    width:35px;
    height: 35px;
    background-color: #0073B1;
    border-radius: 50%;
    margin-right: 5px;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;

    @media (min-width:767px){
        width:40px;
        height:40px;
        margin-left: 10px;
    }
`
const PinterestIcon = styled.div`
    width:35px;
    height: 35px;
    background-color: #EC407A;
    border-radius: 50%;
    margin-right: 5px;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;

    @media (min-width:767px){
        width:40px;
        height:40px;
        margin-left: 10px;
    }
`
const BehanceIcon = styled.div`
    width:35px;
    height: 35px;
    background-color: #1666F7;
    border-radius: 50%;
    margin-right: 5px;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;

    @media (min-width:767px){
        width:40px;
        height:40px;
        margin-left: 10px;
    }
`

const Div2 = styled.div`
    width:100%;
    display: flex;
    padding: 20px 0px;
    justify-content: center;
    align-items: center;
        
    @media (min-width:767px){
        width:80%;
        height:50px;
        padding:unset;
        justify-content: unset; 
        align-items: unset; 
    }
`

const Div = styled.div`
    width:80%;
    height:150px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    
    @media (min-width:767px){
        margin-left:30px;
    }
`

const Span = styled.span`
    width:100%;
   display:flex;
   flex-direction: column;
   p{
        width:79%;
        margin:0;
        align-self: center;
   }

   span{
        width: 89%;
        align-self: center;
   }
`

const Icon = styled.div`
    width:25px;
    height:25px;
    /* background-color:lightgrey; */
    margin-right:10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H2 = styled.h2`
    font-size:20px;
    width:90%;
    margin:5px;
    display:flex;
`

const HolderTwo = styled.div`
    margin-bottom:25px;
`

const Image = styled.img`
    width:100%;
    height:300px;
    object-fit: contain;
`

const H1 = styled.h1`
    margin:10px 0px;
    font-size:12px;

    @media (min-width:1024px){
        font-size:25px;
    }
`

const Text = styled.div`
    width:100%;
    @media (min-width:767px){
        width:50%;
    }
`

const Holder = styled.div`
    width:100%;
    align-self:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    @media (min-width:1024px){
        width:95%;
    }

        
    @media (min-width:767px){
        display: flex;
        justify-content: space-between;
        flex-direction:unset;
    }
`

const Title = styled.h1`
    font-size:30px;
    margin:0;
    
    /* opacity:20%; */
   
    @media (min-width:1024px){
        font-size:50px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;  
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
    color:#000;
    background:linear-gradient(to bottom , #fff,#aef99bba) ;
`
