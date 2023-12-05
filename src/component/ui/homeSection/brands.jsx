import styled from "styled-components"

const Brands = () =>{
    return(
        <Section>
            <Wrapper>
                <Title>Brands</Title>
                <Holder>
                    <Text>
                        <H1>Brands We Built</H1>
                    </Text>
                    <Cards>
                        <Div>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/aero-logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/BC-Logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/Pfizer_logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/simform-logo.svg" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/netsmartz-logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/Trianz-Recruitment.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/xebia_logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/accubtis-logo.jpg" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/wealthzinewLogo.svg" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/ZS_logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/gray-matrix.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/app-sage.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/immersive-infotech.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/Singtel_logo.png" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/smartdata-enterprise.svg" alt=""/>
                            </Box>
                            <Box>
                                <Image src="https://avioxtechnologies.com/static/images/Hauler-Hero.png" alt=""/>
                            </Box>
                        </Div>
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Brands;

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

    @media (min-width:760px){
        grid-template-columns:repeat(4,1fr);
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
    /* height:calc(100vh - 80px); */
    display:flex;
    justify-content:center;
    align-items:center;
    align-self:center;

    @media (min-width:990px){
    }
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;

    @media (min-width:1024px){
        font-size:35px;
    }
`

const Text = styled.div`
    margin: 20px 0px;
`

const Holder = styled.div`
    width:100%;
    align-self:center;

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