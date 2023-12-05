import React from 'react'
import styled from 'styled-components'
import {TbCircleDotFilled} from "react-icons/tb"

const Service_Details = () => {
  return (
    <>
      <Wrapper>
          <Top>
               <Icon>
                   <TbCircleDotFilled/>
               </Icon>
               <Title>Community </Title>
           </Top>
           <Down>React allows developers to use individual components of their application on either the client-side or the server-side, which speeds up product development.</Down>
          </Wrapper>
    </>
  )
}

export default Service_Details

// const Wrapper = styled.div``


const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #686868;
`


const Icon = styled.div`
  color: #4343d3e6;
  font-size: 20px;
`

const Down = styled.div`
  margin-left: 40px;
  font-size: 18px;
 color: #3a3838;
 font-weight: 400;
`

const Top = styled.div`
  display: flex;
  /* background-color: red; */
  width: 50%;
  height: 30px;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`


const Wrapper = styled.div`
  width: 300px;
  /* background-color:red ; */
  margin: 20px;
`

