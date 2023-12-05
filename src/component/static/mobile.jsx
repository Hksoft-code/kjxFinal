import styled from "styled-components"
import { Link } from "react-router-dom"
import MobileScreen from "./Responsive/MobileScreen";

const MyHover = ({ setIsOpens }) => {
    return (
        <Container
          onMouseLeave={() => {
                    setIsOpens(false);
                }}
        >
            
            <MobileScreen setIsOpens={setIsOpens}/>
            
        </Container>
    )
}
export default MyHover;

const Nav1 = styled.div`
    width:98%;
    font-weight:bold;
    margin:20px 0px;
`

const Navs = styled(Link)`
    text-decoration:none;
    color:#000;
    width:98%;
    align-self:flex-end;

    margin-bottom:20px;
    img{
        height:20px;
        width:20px;
        object-fit:contain;
    }
`

const Nav2 = styled(Link)`
    text-decoration:none;
    color:#000;
    width:90%;
    align-self:flex-end;
    h1{
        font-size:16px;
        margin:0;
    }
`

const Nav = styled.div`
    width:100%;
    h1{
        font-size:16px;
    }
`

const Holder = styled.div`
    width:300px;
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
`

const Wrapper = styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    overflow:auto;

    
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(83,83,83);
        border-radius: 50px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
`

const Container = styled.div`
    
    width:90%;
    height:100%;
    flex-direction:column;
    justify-content:start;
    align-items:start;
    position:absolute;
    background-color:#ecdd84;
    z-index:20;
    overflow:auto;

    @media (min-width:990px){
        display:none;
    }
`
