import React from 'react'
import styled from 'styled-components'
import JobOfferList from '../component/ui/Admin/JobOfferList'
import AdminHeader from '../component/static/adminHeader'

const AdminScreen = () => {
  return (
    <AdminPageContainer>
      <AdminHeader/>
    <Div>
      <JobOfferList />
    </Div>
  </AdminPageContainer>
  )
}

export default AdminScreen

const Div = styled.div`
  width:90%;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  background-color: red;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  
  @media (min-width:766px){
  width:90%;
  min-height: 100vh;
  display:flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: unset;
  }
`

const AdminPageContainer = styled.div`
  min-height:100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;