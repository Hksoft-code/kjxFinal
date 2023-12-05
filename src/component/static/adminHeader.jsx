import styled from "styled-components"
import {useAuth} from "../ui/Admin/AuthContext"
import { Link } from "react-router-dom"

const AdminHeader = () =>{

    const {Logout,setState} = useAuth()

    return(
        <Section>
            <Li to="/=kjxsofttechbdhd-h652hdsnadmin=admin-upload-job" onClick={()=>{
                // setSearchTerm("")
            }}>Upload-Job</Li>
            <Li to="/=kjxsofttechbdhd-h652hdsnadmin=admin-upload-job-done" onClick={()=>{
                // setSearchTerm("")
            }}>Upload-Work-Done</Li>
            <Lis onClick={()=>{
                setState(true)
            }}>All-Work-Done</Lis>
            <Lis onClick={()=>{
                setState(false)
            }}>All-Job</Lis>
            <Lis onClick={()=>{
                Logout()
            }}>LogOut</Lis>
        </Section>
    )
}

export default AdminHeader;

const Lis = styled.div`
    padding: 10px 15px;
    font-weight: bold;
    margin-left:20px;
    font-size: 15px;
    border-radius: 50px;
    border:1px solid lightgrey;
    cursor: pointer;
`


const Li = styled(Link)`
    padding: 10px 15px;
    font-weight: bold;
    margin:5px 10px;
    font-size: 15px;
    border-radius: 50px;
    border:1px solid lightgrey;
    text-decoration: none;
    color:#000;
`

const Section = styled.header`
    padding:5px 0px;
    width:100%;
    background:#fff;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    position: fixed;
    padding:20px 0px;
    top:50px;
    z-index:90;

    @media (min-width:990px){
        top:80px;
    }
`