import styled from "styled-components"

import img1 from "../../assets/badge-1 1.png"
import img2 from "../../assets/badge-2 1.png"
import img3 from "../../assets/badge-3 1.png"
import img4 from "../../assets/global_impression_extract 1.png"
import img5 from "../../assets/global_impression_goodfirm 1.png"
import img6 from "../../assets/global_impression_trust 1@2x.png"

const Impression = ({text,subtext}) =>{
    return(
        <Section className="mt-5">
            <Wrapper>
                <Title className='text-cyan-600'>{text}</Title>
                <Holder>
                   
                    <Cards>
                        <Div>
                            <Box>
                                <Image src={img1} alt=""/>
                            </Box>
                            <Box>
                                <Image src={img2} alt=""/>
                            </Box>
                            <Box>
                                <Image src={img3} alt=""/>
                            </Box>
                            <Box>
                                <Image src={img4} alt=""/>
                            </Box>
                            <Box>
                                <Image src={img5} alt=""/>
                            </Box>
                            <Box>
                                <Image src={img6} alt=""/>
                            </Box>
                        </Div>
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Impression;

const Box = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (min-width:990px){
        border-right:1px dotted grey;
        border-bottom:1px dotted grey;
    }

`

const Div = styled.div`
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(3,1fr);

    @media (min-width:990px){
        grid-template-columns:repeat(3,1fr);
        grid-template-rows:repeat(2,1fr);
    }
`

const Image = styled.img`
    width:130px;
    height:130px;
    object-fit:contain;

`

const Cards = styled.div`
    width:100%;
    height:calc(100vh - 80px);
    display:flex;
    justify-content:center;
    align-items:center;
    padding:60px 0px 0px;
    align-self:center;
    overflow:hidden;

    @media (min-width:990px){
        height:50vh;
    }
`

const H1 = styled.h1`
    margin:0;
    font-size:12px;

    @media (min-width:1024px){
        font-size:25px;
    }
`

const Text = styled.div``

const Holder = styled.div`
    width:100%;
    align-self:center;
    overflow:hidden;

    @media (min-width:1024px){
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
    color:#006400;
`