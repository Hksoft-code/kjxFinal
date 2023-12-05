import styled from "styled-components"
import {Link} from "react-router-dom"
import img from "../../../assets/otherImage/joinUs.png"
import { useState } from "react"

const JoinUs = () => {

   

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // await axios.post("http://localhost:4567/api/v2/contact", formData)
        //     .then((response) => {
        //         console.log(response)
        //     }).catch((error) => {
        //         console.log(error.message)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        let number = 7488325096;
        let url = `https://wa.me/9661087999`;
        // Appending the message to the URL by encoding it
        // url += `&text='Hello'`;
        window.open(url);
        

    }
    

  return (
    <Section>
        <Wrapper>
            <HolderOne>
                <H1>
                Want to be the part of our family?
                </H1>
                <P className="mb-6">
                We create a place where you would be inspired.
                </P>
                <Button  to="/careers" onClick={handleSubmit}>Join Us</Button>
            </HolderOne>
            <Image src={img} alt="career-img.png"/>
        </Wrapper>
    </Section>
  )
}

export default JoinUs;

const Button = styled(Link)`
    text-decoration:none;
    width:120px;
    height: 40px;
    background:linear-gradient(110.92deg, #FF900D 8.54%, #F08200 91.46%);
    border-radius: 4px;
    border: none;
    color:#fff;
    font-weight: 600;
    font-size: 10px;
    z-index: 1;
    margin-top:20px;

    
    @media (min-width:768px){
        // width:190px;
        // height: 50px;
        font-size: 20px;
        padding:10px 20px;
        margin-top:30px;
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
