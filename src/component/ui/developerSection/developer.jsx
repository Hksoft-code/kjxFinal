import styled from "styled-components"
import react from "../../../assets/reactjs.png"
import angular from "../../../assets/angular.png"
import vue from "../../../assets/vue.png"
import node from "../../../assets/nodejs.png"
import laravel from "../../../assets/laravel.png"
import YII from "../../../assets/yii_brand.png"
import CakePHP from "../../../assets/cakephp-brands.png"
import symfony from "../../../assets/symfony_brand.png"

const Developer = () =>{
    return(
        <Section>
            <Wrapper>
                <Title>Our Developers</Title>
                <Holder>
                    <Text>
                        <H1>Developers</H1>
                    </Text>
                    <HolderTwo>
                        <Text2>
                            <P>
                                Data Engineer
                            </P>
                            <P>
                                Backend Developers
                            </P>
                            <P>
                                Mobile Developers
                            </P>
                            <P>
                                AI & ML Developers
                            </P>
                            <P>
                                Cloud Engineer
                            </P>
                        </Text2>
                        <Cards>
                            <Div>
                                <CardHolder>
                                    <Image src={react} alt="react_brand"/>
                                    <Span>React Js Developers</Span>
                                </CardHolder>
                                <CardHolder>
                                    <Image src={angular} alt="angular_brand"/>
                                    <Span>Angular Developers</Span>
                                </CardHolder>
                                <CardHolder>
                                    <Image src={vue} alt="vue_brand"/>
                                    <Span>Vue Js Developers</Span>
                                </CardHolder>
                                <CardHolder>
                                    <Image src={node} alt="node_logo"/>
                                    <Span>Node Js Developers</Span>
                                </CardHolder>
                                <CardHolder>
                                    <Image src={laravel} alt="larvel-brands"/>
                                    <Span>Laravel Developers</Span>
                                </CardHolder>
                                <CardHolder>
                                    <Image src={YII} alt="Yii_brand"/>
                                    <Span> Yii Developers</Span>
                                </CardHolder>
                                <CardHolder>
                                    <Image src={CakePHP} alt="cakephp-brands"/>
                                    <Span>Cake PHP Developers</Span>
                                </CardHolder>
                                <CardHolder>
                                    <Image src={symfony} alt="symfony_brand"/>
                                    <Span>Symfony Developers</Span>
                                </CardHolder>
                            </Div>
                        </Cards>
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Developer;

const Div = styled.div`
    width:100%;
    height:100%;
    gap:20px;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(4,1fr);

    @media (min-width:766px){
        grid-template-columns:repeat(4,1fr);
        grid-template-rows:repeat(2,1fr);
        gap:20px;
    } 
`

const Span = styled.span`
    width:70%;
    text-align:center;
`

const CardHolder = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    @media (min-width:766px){
        justify-content:space-around;
    } 
`

const Cards = styled.div`
    width:100%;
    padding:30px 0px;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (min-width:766px){
        padding:unset;
    } 
`

const HolderTwo = styled.div`
    width:100%;

    @media (min-width:766px){
        width:100%;
        height:70vh;
        display: flex;
        justify-content:space-between;
        padding:30px 0px;
    }   
`

const Image = styled.img`
    width:100px;
    height:100px;
    object-fit: contain;
    
    @media (min-width:766px){
        width:80%;
    }
`

const P = styled.p`
    padding:20px 0px;
    border-bottom: 2px solid lightgreen;
    font-size: 20px;
    font-weight: 500;
    margin:0px;
    color:grey;

    @media (min-width:766px){
        width:100%;
        word-break: break-all;
    }
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;
    color: #000;

    @media (min-width:1024px){
        font-size:35px;
    }
`

const Text2 = styled.div`
        
    @media (min-width:766px){
        width:50%;
    }
`

const Text = styled.div`
    margin-top:20px;
`

const Holder = styled.div`
    width:100%;
    align-self:center;

    @media (min-width:766px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    color:#00640065;
    /* opacity:20%; */
   
    @media (min-width:1024px){
        font-size:65px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
    color:#006400;
`
