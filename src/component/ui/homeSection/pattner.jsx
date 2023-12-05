import styled from "styled-components"

const Pattner = () =>{
    return(
        <Section>
            <Wrapper>
                <Title>Partners</Title>
                <Holder>
                    <Text>
                        <H1>Our Partners</H1>
                    </Text>
                    <Cards>
                        <Div>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/cw_logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/ITT%20Digital%203.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/sharedpro_logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/Left-Brain-Logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/cs-logo.svg" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/northrose.png" alt=""/>
                            </Box>
                        </Div>
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Pattner;

const Box = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width:990px){
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
    align-self:center;

    @media (min-width:990px){
        height:50vh;
    }
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;

    @media (min-width:1024px){
        font-size:35px;
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