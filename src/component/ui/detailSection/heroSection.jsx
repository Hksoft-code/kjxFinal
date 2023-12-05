import styled from "styled-components"

const HeroPage = ({h1,p,start,colored,end,img}) => {
  return (
    <Section>
        <Wrapper>
            <HolderOne>
                <H1>
                    {h1}
                </H1>
                <P>
                    {p}
                </P>
                <H2>
                    {start} <span>{colored}</span> {end}
                </H2>
            </HolderOne>
            <Image src={img} alt="img.png"/>
        </Wrapper>
    </Section>
  )
}

export default HeroPage;

const H2 = styled.div`
    font-size:29px;
    font-weight: normal;
    span{
        font-weight: bold;
    }
`

const Image = styled.img`
    /* width:300px; */
    width:100%;
    height:300px;
    object-fit: contain;
`

const P = styled.p`
    font-size: 16px;
    font-weight: normal;
    color:grey;
`

const H1 = styled.h1`
    font-size:29px;
    font-weight: normal;
    span{
        font-weight: bold;
    }
`

const HolderOne = styled.div`
    @media (min-width:767px){
        width:90%;
    }
`

const Wrapper = styled.div`
    width:90%;
    
    @media (min-width:767px){
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
`

const Section = styled.section`
    width:100%;
    min-height: 50vh;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: #F9F9F9;
    color:#006400;
    padding:20px 0px;
`