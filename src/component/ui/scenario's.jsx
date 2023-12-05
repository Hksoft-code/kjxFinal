import React,{useState} from "react"
import styled from "styled-components"

import img from "../../assets/fixed.png"
import img1 from "../../assets/hourly.png"
import img2 from "../../assets/contract.png"

const Scenario = ({title,sub_title}) =>{

    const [slide,setSlide] = useState(0)

    const data = [
        {
            title:"Fixed Price",
            disc:"Our Fixed cost worldview best suits clients who wish to achieve projects with restricted options and adaptability with clear, foreordained and consistent prerequisites. Onboarding of little measured projects is first started by assessing a doable time and spending plan to make a MVP which limits project takes a chance before improvement begins. This model keeps stable estimating sticking to the prescient computations of work, time and budget.",
            teams:"Fixed Process Term & Conditions",
            url:img
        },
        {
            title:"Hourly Process",
            disc:"We will choose hours/week to work, after that we follow our development process. And the process goes: Planning, Analysis, Design, Development, Implementation, Testing, Delivery. Now in this process planning will be done first and it can be updated later. Rest of the process is done till client satisfaction on the end result. Now this process is best for the long term and the required outcome can be expected.",
            teams:"Hourly Process Term & Conditions",
            url:img1
        },
        {
            title:"Contractual Job",
            disc:"With this process we find a specific task and time and deliver it within the intended time. Now it will take some time to process the requirements, after that total focus will be on delivering the complete project or task. It’s the best choice to get the task done within the time interval. Contractual basis process is mostly used by our clients but it has its own limitations.",
            teams:"Contractual Process Term & Conditions",
            url:img2
        },
    ]
    return(
        <Section>
            <Wrapper>
                <Title className='text-cyan-600'>{title}</Title>
                <Holder>
                    <Text>
                        <H1>{sub_title}</H1>
                    </Text>
                    <Buttons>
                        <Button onClick={()=>{setSlide(0)}}>1. Fixed Process</Button>
                        <Button onClick={()=>{setSlide(1)}}>2. Hourly Process</Button>
                        <Button onClick={()=>{setSlide(2)}}>3. Contractual Jsob</Button>
                    </Buttons>
                    <HolderTwo>
                        <Image bg={data[slide].url}/>
                        <Text2>
                            <H2>{data[slide].title}</H2>
                            <P>
                            {data[slide].disc}
                            </P>
                            <H4>{data[slide].teams}</H4>
                        </Text2>
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Scenario;

const Button = styled.button`
    width:200px;
    height:45px;
    border:none;
    background-color:lightgreen;
    border-radius:50px;
    font-weight:bold;
    color:grey;
    margin-bottom:10px;

    
    @media (min-width:766px){
        margin-left:10px;
    }
`

const Buttons = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
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
        padding:30px 0px;
    }   
`

const Image = styled.div`
    width:100%;
    height:200px;
    background-image:url(${({bg})=>bg});
    background-repeat:no-repeat;
    background-size:contain;
    
    @media (min-width:766px){
        width:50%;
    }  

    @media (min-width:1205px){
        height:400px;
    }
`

const H4 = styled.h1`
    font-size: 18px;
    width:100%;
    font-weight: 400;
    color:green;
`

const H2 = styled.h1`
    font-weight: bold;
    margin-top: 0;
    font-size: 20px;
`

const P = styled.p`
    font-size: 16px;
    font-weight: normal;
    color:rgba(000,000,000,90%);

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
    @media (min-width:766px){
        width:50%;
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
    color:#00640065;
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
    padding:20px 0px;
    color:#006400;
`