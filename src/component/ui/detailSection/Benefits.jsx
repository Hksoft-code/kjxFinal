import React from 'react'
import styled from 'styled-components'
import Service_Details from './Service_Details'

const Benefits = () => {
  return (
    <Container>
        <Service_Details/>
        <br />
        <Service_Details/>
        <br />
        <Service_Details/>
        <br />
        <Service_Details/>
        <br />
        <Service_Details/>
        <br />
        <Service_Details/>
    </Container>
  )
}

export default Benefits


const Container = styled.div`
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    



`