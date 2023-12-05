import styled from "styled-components"

const Ambience = () =>{
    return(
        <Section>
            <Wrapper>
                <Title>Platforms</Title>
                <Holder>
                    <Text>
                        <H1>Wanna Get The Feel Of Our Happy Hours At Work?</H1>
                    </Text>
                       <p>We take pride in our work and joy in our play. Celebrations are integral part of our culture.</p>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Ambience;



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
    color:rgba(0,118,180);
    opacity:20%;
   
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
   
`