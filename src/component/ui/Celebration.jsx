import React from 'react'
import styled from 'styled-components'

const Celebration = ({img,title}) => {
  return (
    <>
    <Card>
      <Image src={img} alt='An Image' />
      <Title>
        {title}
      </Title>
    </Card>
    </>
  )
}

export default Celebration


const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width:766px){
    width:300px;
    margin: 10px;
  }
`

const Image = styled.img`
  width:100%;
  height: 300px;
  object-fit:contain;
`