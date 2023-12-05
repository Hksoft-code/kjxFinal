import React from 'react'
import styled from 'styled-components'

const TitleBenefits = ({sub_title}) => {
  return (
    <Section>
    <Wrapper>
        <Title>Benefits</Title>
        <Holder>
            <Text>
                <H1>{sub_title}</H1>
            </Text>
        </Holder>
    </Wrapper>
</Section>
  )
}

export default TitleBenefits



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