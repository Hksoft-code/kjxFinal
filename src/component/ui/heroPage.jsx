import styled from "styled-components"

const HeroPage = ({h,br,p,c,img}) => {
  return (
    <Section>
        <Wrapper>
            <HolderOne>
                <H1>
                    {h}
                    <span>{c}</span>
                    {br}
                </H1>
                <P>
                    {p}
                </P>
            </HolderOne>
            <Image src={img} alt="career-img.png"/>
        </Wrapper>
    </Section>
  )
}

export default HeroPage;

const Image = styled.img`
    /* width:300px; */
    width:100%;
    height:350px;
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