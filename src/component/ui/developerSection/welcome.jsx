import styled from "styled-components"

import img from "../../../assets/aboutus.png"

const Welcome = () =>{
    return(
        <Section>
            <Wrapper>
                <Title>Welcome</Title>
                <Holder>
                    <Text>
                        <H1>Hire Developers.</H1>
                    </Text>
                    <HolderTwo>
                        <Text2>
                            <H2>Hire the <Span>Best</Span> Developer</H2>
                            <H3>Increase the return on your engineering investment with us because we have</H3>
                            <P>
                            - Engineers with certification and quality assurance teams.
                            </P>
                            <P>
                            - Temporary and permanent staffing services tailored to your needs.
                            </P>
                            <P>
                            - SME and enterprise web, mobile, and API development services at competitive prices.
                            </P>
                            <P>
                            - You will have a competitive advantage with our AWS, Google, or Microsoft certified engineer.
                            </P>
                            <H4>Our Clients Include: Fortune 100 and 500 companies</H4>
                        </Text2>
                        <Image src={img} alt="career-img.png"/>
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Welcome;

const HolderTwo = styled.div`
    width:100%;

    @media (min-width:766px){
        width:100%;
        height:70vh;
        display: flex;
        padding:30px 0px;
    }   
`

const Image = styled.img`
    width:100%;
    height:300px;
    object-fit: contain;
    
    @media (min-width:766px){
        width:50%;
    }  

    @media (min-width:1205px){
        height:400px;
        align-self:flex-end;
    }
`

const Span = styled.span`
    font-weight: bold;
`

const H4 = styled.h1`
    font-size: 20px;
    width:100%;
    font-weight: 500;
`

const H3 = styled.h1`
    font-size: 20px;
    width:100%;
    font-weight: 500;
`

const H2 = styled.h1`
    font-weight: 400;
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