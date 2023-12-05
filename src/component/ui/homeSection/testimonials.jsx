import React,{useState} from "react"
import styled from "styled-components"
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
import {useAuth} from "../Admin/AuthContext"

import img from "../../../assets/fixed.png"
import img1 from "../../../assets/hourly.png"
import img2 from "../../../assets/contract.png"
import img3 from "../../../assets/testimonial.jpg"

const Testimonials = () =>{

    const [slide,setSlide] = useState(0)
    const {targetComponentRef} = useAuth()

    const data = [
        {
            title:"Fixed Price",
            disc:"Our Fixed cost worldview best suits clients who wish to achieve projects with restricted options and adaptability with clear.",
            url:img3
        },
        {
            title:"Hourly Process",
            disc:"We will choose hours/week to work, after that we follow our development process. And the process goes: Planning, Analysis, Design, Development, Implementation, Testing, Delivery. Now in this process planning will be done first and it can be updated later. Rest of the process is done till client satisfaction on the end result. Now this process is best for the long term and the required outcome can be expected.",
            url:img1
        },
        {
            title:"Contractual Job",
            disc:"With this process we find a specific task and time and deliver it within the intended time. Now it will take some time to process the requirements, after that total focus will be on delivering the complete project or task. It’s the best choice to get the task done within the time interval. Contractual basis process is mostly used by our clients but it has its own limitations.",
            url:img2
        },
    ]
    return(
        <Section className="shadow-xl bg-teal-500" ref={targetComponentRef}>
            <Wrapper>
                <Title className='text-white'>Testimonials</Title>
                <Holder>
                    <Text>
                        <H1>Voices that affirm our dedication and excellence</H1>
                    </Text>
                    <HolderTwo>
                        <Icon></Icon>
                        <Div>
                        <Image>
                            <img src={data[slide].url}/>
                        </Image>
                        <Text2>
                            <P>
                            <Quote>
                                <FaQuoteLeft size={43}/>
                            </Quote>
                            <p>{data[slide].disc}</p>
                            <Quote2>
                                <FaQuoteRight size={43}/>
                            </Quote2>
                            </P>
                            <h1>Prog Nauts</h1>
                        </Text2>
                        </Div>
                        <Icon></Icon>
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Testimonials;

const Div = styled.div`
    width:90%;
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
       
    @media (min-width:1010px){
        flex-direction: unset;
    }
`

const Icon = styled.button`
    width:40px;
    height:40px;
    border:none;
    background-color:#000;
    border-radius:50%;
    font-weight:bold;
    color:grey;

    
    @media (min-width:766px){
    }
`

const HolderTwo = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width:766px){
        width:100%;
        /* height:40vh; */
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding:30px 0px;
    }   
`

const Image = styled.div`
    width:100%;
    height:250px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin:20px 0px;
    border-top: solid 5px #006400;
    img{
        width:40%;
        height: 50%;
        // border:5px solid #fff;
        // border-radius: 10px;
        object-fit: contain;
        // background-color: #FCE8E3;
    }

       
    @media (min-width:1010px){
        width: 50%;
        margin:none;
    }
`

const Quote2 = styled.div`
    width: 30px;
    height: 30px;
    align-self: flex-end;

    @media (min-width:766px){
        width: 40px;
        height: 40px;
        align-self: flex-end;
    } 
`

const Quote = styled.div`
    width: 30px;
    height: 30px;
    align-self: flex-start;

    @media (min-width:766px){
        width: 40px;
        height: 40px;
        align-self: flex-start;
    }
`

const P = styled.p`
    width:100%;
    font-size: 16px;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:rgba(000,000,000,90%);
    
    p{
        width:100%;
        margin-left: 20px;
        word-break: break-all;
    }

    @media (min-width:1024px){
        width:100%;

        p{
            width:80%;
            margin-left: 20px;
            word-break: break-all;
        }
    }
`

const H1 = styled.h1`
    margin:0;
    font-size:12px;
    color: #000;

    @media (min-width:1024px){
        font-size:25px;
    }
`

const Text2 = styled.div`
    @media (min-width:1024px){
        width:45%;
        h1{
            margin-bottom: 0;
        }
    }
`

const Text = styled.div`
    margin-top:20px;
`

const Holder = styled.div`
    width:100%;
    /* min-height: 88vh; */
    height: 100%;
    align-self:center;

    @media (min-width:766px){
        width:95%;
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
`