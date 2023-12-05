
import global from "../../assets/servicesImage/target.png"
import targetauidence from "../../assets/servicesImage/target.png"
import IBA from "../../assets/servicesImage/brand.png"
import personalization from "../../assets/project.png"
import UGIC from "../../assets/intraction.png"
import AI from "../../assets/AI.png"
import styled from "styled-components"
import Hover1 from './Hover1'




const MyHover1 = ({ setIsOpens }) => {
    return (
        <Container>
            <Wrapper
                onMouseLeave={() => {
                    setIsOpens(false);
                }}
            >
                <Holder>
                    <Hover1 setIsOpens={setIsOpens} />
                </Holder>
            </Wrapper>
        </Container>
    )
}
export default MyHover1;



const Nav = styled.div`
    h1{
        font-size:16px;
    }
`

const Holder = styled.div`
width: -webkit-fill-available;
    display:flex;
    flex-direction:column;
    margin:20px;
`

const Wrapper = styled.div`
    
    width: -webkit-fill-available;
    display:flex;
    flex-wrap:wrap;
    overflow:auto;
    align-items:center;

    
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
    display:none;

    @media (min-width:990px){
        display:flex;
        width:100%;
        justify-content:center;
        align-items:center;
        position:absolute;
        top:60px;
        z-index:3;
    }
`