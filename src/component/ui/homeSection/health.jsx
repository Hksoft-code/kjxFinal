import styled from "styled-components"
import mecical from "../../../assets/mecical.png"
import {TbArrowBadgeRight} from "react-icons/tb"
import { Link } from "react-router-dom"

const Hero = () =>{
    return(
        <Section>
            <Wrapper>
                <Holder>
                    <Text>
                        <H1>
                            Want Healthcare Management Services?
                        </H1>
                        <P>
                        We provide you the various practice management services to maintain your revenue cycle. Our Healthcare solutions makes physician's life easier.
                        </P>
                        <Textwo>
                            <Hold>
                                <Span>
                                    <Icon>
                                        <TbArrowBadgeRight/>
                                    </Icon>
                                    Credentialing & Contracting
                                </Span>
                                <Span>
                                    <Icon>
                                    <TbArrowBadgeRight/>
                                    </Icon>
                                    Coding & Chrart Audits
                                </Span>
                                <Span>
                                    <Icon>
                                    <TbArrowBadgeRight/>
                                    </Icon>
                                    Eligibility Verification
                                </Span>
                                <Span>
                                    <Icon>
                                    <TbArrowBadgeRight/>
                                    </Icon>
                                    Charge Entry
                                </Span>
                            </Hold>
                            <Hold>
                                <Span>
                                    <Icon>
                                    <TbArrowBadgeRight/>
                                    </Icon>
                                    Payment Posting
                                </Span>
                                <Span>
                                    <Icon>
                                    <TbArrowBadgeRight/>
                                    </Icon>
                                    Denial Management
                                </Span>
                                <Span>
                                    <Icon>
                                    <TbArrowBadgeRight/>
                                    </Icon>
                                    Prior Authorization
                                </Span>
                                <Span>
                                    <Icon>
                                    <TbArrowBadgeRight/>
                                    </Icon>
                                    Reporting
                                </Span>
                            </Hold>
                        </Textwo>
                        <Button  onClick={()=>{
                            window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                        }} to={"/careers"}>Visit Now</Button>
                    </Text>
                    <Image src={mecical}/>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Hero;

const Icon = styled.div`
    width:40px;
    height:40px;
    /* background-color:grey; */
    color: #FFD700;
    margin-right:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bolder;
`

const Span = styled.p`
    width:100%;
    display:flex;
    align-items:center;
    font-weight:600;

    @media (min-width:990px){
        max-width:100%;
    }
`

const Hold = styled.div`
    width: 90%;

    @media (min-width:767px) {
        width:auto;
        margin-top: 20px;
    }
`

const Textwo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    margin-top:55px;
    width:60%;

    @media (min-width:767px){
        width:60%;
        flex-wrap: wrap;
    }
    
    @media (min-width:990px){
        max-width:89%;
        width:100%;
        display:flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items:flex-start;
    }
`

const Holder = styled.div`
    width:100%;

    @media (min-width:767px){
        width:90%;
    }
    
    @media (min-width:990px){
        width:94%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

const Image = styled.img`
    width:100%;
    min-height:300px;
    object-fit:contain;

    @media (min-width:767px){
        width:100%;
        height:400px;
    }

    @media (min-width:990px){
        width:50%;

    }
`

const Button = styled(Link)`
    width:190px;
    height:45px;
    border:none;
    border-radius:50px;
    font-size:16px;
    font-weight:bold;
    color:#fff;
    margin-top:25px;
    background-color:orange;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

`

const P = styled.p`
    margin-top:28px;

    @media (min-width:772px){
        width:100%;
    }

    @media (min-width:990px){
        width:70%;
        font-size:20px;
    }
`

const H1 = styled.h1`
    font-size:30px;
    font-weight:bold;
    margin-bottom:0;
    
    @media (min-width:772px){
        width:100%;
    }

    @media (min-width:990px){
        font-size:35px;
        width:70%;
        margin:0;
    }
`

const Text = styled.div`
    font-weight:normal;
    padding:20px;
    width:70%;

    @media (min-width:772px){
        width:100%;
    }
    
    @media (min-width:990px){
        width:70%;
    }
`

const Wrapper = styled.div`
    width:95%;
    padding:20px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f5fff6;

    @media (min-width:990px){
        padding:30px 0px;
    }
`