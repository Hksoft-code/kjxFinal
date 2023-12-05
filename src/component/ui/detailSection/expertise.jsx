import styled from "styled-components"

const Expertise = ({p1,p2,p3,p4,p5,p6}) =>{
    return(
        <Section>
            <Wrapper>
                <Title>Partners</Title>
                <Holder>
                    <Text>
                        <H1>Our Partners</H1>
                    </Text>
                    <Cards>
                        <Box>
                            <h1>01</h1>
                            <span>{p1}</span>
                        </Box>
                        <Box>
                            <h1>02</h1>
                            <span>{p2}</span>
                        </Box>
                        <Box>
                            <h1>03</h1>
                            <span>{p3}</span>
                        </Box>
                        <Box>
                            <h1>04</h1>
                            <span>{p4}</span>
                        </Box>
                        <Box>
                            <h1>05</h1>
                            <span>{p5}</span>
                        </Box>
                        <Box>
                            <h1>06</h1>
                            <span>{p6}</span>
                        </Box>
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Expertise;

const Box = styled.div`
    width:90%;
    height:200px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius: 10px;
    background-color:#fff;
    margin-bottom: 20px;
    border:solid 1px #ccc;
    box-shadow: 0px 0px 5px #ccc;

    h1{
        font-size: 30px;
        font-weight:bolder ;
        text-shadow: 5px 10px 5px #006400 ;
    }

    span{
        font-weight:500;
    }

    @media (min-width:990px){
        width:350px;
        margin-bottom: unset;
    }

`

const Cards = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items:center;
    align-self:center;
    padding: 20px 0px;

    @media (min-width:990px){
        height:60vh;
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

    @media (min-width:1024px){
        width:90%;
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