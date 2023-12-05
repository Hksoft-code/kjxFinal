import styled from "styled-components"
import {Link} from "react-router-dom"

const HeroPage = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Section>
        <Wrapper>
            <HolderOne>
                <H1>
                  The Most <span>Happening People</span> With Us
                </H1>
                <P>
                  We are not just developers, marketers, designers, strategists or managers. We are even artists, cooks, travelers, readers, musicians, among the rest other talents. We celebrate these different perspectives of each individual that translate to tech skills and overall growth of the company.
                </P>
                <H2>
                  An <span>Extended Team</span>, which can be part of <span>your Project</span>
                </H2>
                <Button onClick={scrollToTop} to={"/aboutus"}>Know More</Button>
            </HolderOne>
            <Image src="https://avioxtechnologies.com/static/images/work_cult19.jpg" alt="career-img.png"/>
        </Wrapper>
    </Section>
  )
}


export default HeroPage;

const Button = styled(Link)`
text-decoration:none;
    width:150px;
    height:40px;
    border:none;
    border-radius: 50px;
    color:#fff;
    font-weight:bold;
    background:orange;
    margin-bottom:20px;
`

const Image = styled.img`
    width:90%;
    height: 500px;
    object-fit: cover;
    border-radius:50px;
   
  @media (min-width:760px){
    width:40%;
  }
`

const P = styled.p`
    font-size: 18px;
    font-weight: normal;
    color:grey;
`

const H1 = styled.h1`
    font-size:35px;
    font-weight: normal;
    span{
        font-weight: bold;
        color:#003BC0;
    }

    @media (min-width:767px){
      font-size:45px;
      width:65%;
      margin-bottom:0;
      word-break:break-all;
    }
`

const H2 = styled.h1`
    font-size:25px;
    font-weight: normal;
    span{
        font-weight: bold;
        color:#003BC0;
    }

    @media (min-width:767px){
      font-size:30px;
      width:95%;

    }
`

const HolderOne = styled.div`
    @media (min-width:767px){
        width:50%;
    }
`

const Wrapper = styled.div`
    width:75%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:20px 0px;

    @media (min-width:760px){
        width:90%;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    }
`

const Section = styled.section`
    width:100%;
    min-height: 50vh;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: #F0FFFF;
    color:#15305E;
    padding:20px 0px;
`