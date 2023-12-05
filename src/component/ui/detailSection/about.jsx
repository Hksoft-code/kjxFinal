import styled from "styled-components"

const About = ({title,sub_title,description,sub_description,dis}) =>{
    return(
        <Section>
            <Wrapper>
                <Title>{title}</Title>
                <Holder>
                    <Text>
                        <H1>{sub_title}</H1>
                    </Text>
                    <P>
                        {description}
                    </P>
                    <P2 dis={dis}>
                        {sub_description}
                    </P2>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default About;

const P2 = styled.div`
    width:100%;
    display:${({dis})=>dis};
    justify-content:center;
    align-items:center;
    align-self:center;
    padding:20px;

    @media (min-width:990px){
        
    }
`

const P = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    align-self:center;
    padding:20px;
    color: grey;

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
    margin:10px;
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