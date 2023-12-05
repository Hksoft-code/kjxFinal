import React from 'react'
import styled from 'styled-components'
import Celebration from '../Celebration'

const Pictures = () => {
  return (
    <Container>
        <Wrapper>
            <Celebration img="https://avioxtechnologies.com/static/images/Diwali-2022.png" title="Happy Diwali 2022" />
            <Celebration img="https://avioxtechnologies.com/static/images/Dusshera-2022.png" title="Dussehra 2022" />
            <Celebration img="https://avioxtechnologies.com/static/images/birthday_2022.png" title="Birthday Party 2022" />
            <Celebration img="https://avioxtechnologies.com/static/images/album-img.png" title="Office Expansion" />
            <Celebration img="https://avioxtechnologies.com/static/images/chabeel_event.png" title="Chabeel Distribution" />
            <Celebration img="https://avioxtechnologies.com/static/images/diwali_event.png" title="Diwali Celebration" />
            <Celebration img="https://avioxtechnologies.com/static/images/Party-album-img.png" title="Birthday Party 2021" />
            <Celebration img="https://avioxtechnologies.com/static/images/holi-album-img.png" title="Holi Celebration" />
            <Celebration img="https://avioxtechnologies.com/static/images/chritmas_2021.png" title="Christmas Celebration 2021" />
            <Celebration img="https://avioxtechnologies.com/static/images/christmas_event.png" title="Christmas Celebration 2020" />
            <Celebration img="https://avioxtechnologies.com/static/images/Office-envorment.png" title="Team Gathering" />
            <Celebration img="https://avioxtechnologies.com/static/images/seminar-album.png" title="Seminar" />
            <Celebration img="https://avioxtechnologies.com/static/images/teej-album.png" title="Teej 2021" />
            <Celebration img="https://avioxtechnologies.com/static/images/potluck.png" title="Potluck" />
            <Celebration img="https://avioxtechnologies.com/static/images/potluck.png" title="Teej 2022" />
        </Wrapper>
    </Container>
  )
}

export default Pictures


const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding:20px 0px
`



const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`