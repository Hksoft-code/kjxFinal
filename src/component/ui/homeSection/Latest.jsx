import React,{useState} from "react"
import styled from "styled-components"

import img from "../../../assets/fixed.png"
import img1 from "../../../assets/hourly.png"
import img2 from "../../../assets/contract.png"

const Latest = () =>{

    const [slide,setSlide] = useState(0)

    const data = [
        {
            title:"Fixed Price",
            disc:"Our Fixed cost worldview best suits clients who wish to achieve projects with restricted options and adaptability with clear, foreordained and consistent prerequisites. Onboarding of little measured projects is first started by assessing a doable time and spending plan to make a MVP which limits project takes a chance before improvement begins. This model keeps stable estimating sticking to the prescient computations of work, time and budget.",
            url:"https://avioxtechnologies.com/static/images/ToothHQ-Dental.png"
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
        <Section>
            <Wrapper>
                <Title>Latest Work</Title>
                <Holder>
                    <Text>
                        <H1>Latest Work</H1>
                    </Text>
                    <Buttons>
                        <Icon></Icon>
                        <Icon></Icon>
                    </Buttons>
                    <HolderTwo>
                        <Image>
                            <img src={data[slide].url}/>
                        </Image>
                        <Text2>
                            <H2>{data[slide].title}</H2>
                            <P>
                            {data[slide].disc}
                            </P>
                            <P>
                            {data[slide].disc}
                            </P>
                        </Text2>
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Latest;

const Icon = styled.button`
    width:55px;
    border:none;
    background-color:#000;
    border-radius:50px;
    font-weight:bold;
    color:grey;
    margin-bottom:10px;
    margin-right: 20px;

    
    @media (min-width:766px){
        margin-left:10px;
    }
`

const Buttons = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-end;
    align-items:center;
    margin:40px 0px;
`

const HolderTwo = styled.div`
    width:100%;

    @media (min-width:766px){
        width:100%;
        height:70vh;
        display: flex;
        justify-content:space-between;
        align-items:center;
        /* padding:30px 0px; */
    }   
`

const Image = styled.div`
    width:99%;
    height:400px;
    margin-bottom:20px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(83,83,83);
        border-radius: 50px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }


    img{
        width:100%;
        object-fit: contain;
    }
    
    @media (min-width:766px){
        width:50%;
    }  

    @media (min-width:1205px){
        height:500px;
        margin:unset;
    }
`



const H2 = styled.h1`
    font-weight: normal;
    margin-top: 0;
    font-size: 30px;
`

const P = styled.p`
    font-size: 16px;
    font-weight: normal;
    color:#fff;

    @media (min-width:766px){
        width:100%;
        word-break: break-all;
    }
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;
    color: #000;

    @media (min-width:1024px){
        font-size:35px;
    }
`

const Text2 = styled.div`
color: white;
    @media (min-width:766px){
        width:45%;
    }
`

const Text = styled.div`
    margin-top:20px;
`

const Holder = styled.div`
    width:100%;
    min-height: 88vh;
    height: 100%;
    align-self:center;

    @media (min-width:766px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    color:#00000037;
    /* opacity:20%; */
   
    @media (min-width:1024px){
        font-size:65px;
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
    background-color: #708090;
    padding:20px 0px;
    color:#000;
`