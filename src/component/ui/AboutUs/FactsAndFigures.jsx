import React from 'react'
import styled from 'styled-components'
import img from "../../../assets/digital-marketing-1433427_1280.jpg"
import {BsPerson} from "react-icons/bs"
import {HiOutlineStar} from "react-icons/hi"
import {TbBrandGoogleAnalytics} from "react-icons/tb"
import {BsCupHot} from "react-icons/bs"

const FactsAndFigures = () => {
  return (
        <Container >
        <Wrapper>
          <WrapText>
            <BigText>Facts & <span class ="target">Figures</span> </BigText>
            <SmallText>Client’s Based On <span class = "target">Trust</span>  <br /> And <span class = "target">Value</span> Since Inception!</SmallText>
          </WrapText>
          <Holder>
            <IconsHold>
              <Icon1>
                <BsPerson/>
                </Icon1>
              <Down>
                <Number>450</Number>
                <Desc>Happy Clients</Desc>
              </Down>
            </IconsHold>
            <IconsHold>
              <Icon2>
                <HiOutlineStar/>
              </Icon2>
              <Down>
                <Number>500+</Number>
                <Desc>Project Completed</Desc>
              </Down>
            </IconsHold>
          <IconsHold>
            <Icon3>
              <TbBrandGoogleAnalytics/>
            </Icon3>
            <Down>
              <Number>5+</Number>
              <Desc>Years in Business</Desc>
            </Down>
          </IconsHold>
          <IconsHold>
            <Icon4>
              <BsCupHot/>
            </Icon4>
            <Down>
              <Number>470</Number>
              <Desc>Cups of Coffee</Desc>
            </Down>
          </IconsHold>
          </Holder>
        </Wrapper>
    </Container>
  )
}

export default FactsAndFigures;

const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Holder = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-around;
`
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Desc = styled.div`
  color: white;
`

const Number = styled.div`
  color: white;
  font-size: 35px;

`

const Icon1 = styled.div`
  color:#F18806;
  font-size: 120px;
  font-weight: 100;
  height: 150px;
  margin: 0;
`
const Icon2 = styled.div`
  color:#F18806;
  font-weight: 100;
  font-size: 110px;
  height: 150px;
  margin: 0;
`
const Icon3 = styled.div`
  color:#F18806;
  font-size: 110px;
  font-weight: 100;
  height: 150px;
  margin: 0;
`
const Icon4 = styled.div`
  color:#F18806;
  font-size: 110px;
  font-weight: 100;
  height: 150px;
  margin: 0;
`
const IconsHold = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`


const BigText = styled.div`
  font-size: 40px;
  color: white;
  margin-bottom: 15px;

  .target{
    color: #F18806;
    font-weight: 600;
  }
`


const SmallText = styled.div`
  font-size: 18px;
  color: #ffff;
  text-align: center;


  .target{
    font-weight: 500;
    color:#F18806 ;
  }
`


const Wrapper = styled.div`
  background-color: #00000071;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:20px 0px;
`

const Container = styled.div`
  width: 100%;
  background:url(${img}) #00000071;
  background-repeat: no-repeat;
  background-size: cover;
`