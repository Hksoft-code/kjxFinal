import styled from "styled-components"
import {Link } from "react-router-dom"
import dj from '../../assets/icon/django.png'

const MyHover = ({setIsOpens}) =>{
    return(
        <Container>
            <Wrapper 
                onMouseLeave={() => {
                    setIsOpens(false);
                }}
            >
                <Holder>
                    <Nav>
                        <h1>Python Frameworks</h1>
                    </Nav>
                    <Navs to={"/services/django-development"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                       {/* <img src={dj} alt=""/> */}
                        <span>   Django Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/flask"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src={dj} alt=""/> */}
                        <span>Flask Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/fastapi"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/flash%201.png" alt=""/> */}
                        <span>Fast API Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/kafka"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/kafka.svg" alt=""/> */}
                        <span>Kafka Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/grafana"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/grafana.svg" alt=""/> */}
                        <span>Grafana Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>MVC Frameworks</h1>
                    </Nav>
                    <Navs to={"/services/mvc-frameworks/react-js"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457%202.png" alt=""/> */}
                        <span>React JS Development</span>
                    </Navs>
                    <Navs to={"/services/mvc-frameworks/vue-js"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/vue%201.png" alt=""/> */}
                        <span>Vue JS Development</span>
                    </Navs>
                    <Navs to={"/services/mvc-frameworks/angular-js"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/angular%201.png" alt=""/> */}
                        <span>Angular JS Development</span>
                    </Navs>
                    <Navs to={"/services/mvc-frameworks/node-js"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/node-js%201.png" alt=""/> */}
                        <span>Node JS Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>PHP Frameworks & CMS</h1>
                    </Nav>
                    <Navs to={"/services/php-frameworks/laravel-development"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/laravel%202.png" alt=""/> */}
                        <span>Laravel Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/cake-php-framework"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/cakephp.svg" alt=""/> */}
                        <span>CakePHP Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/codigniter-development"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/codeigniter.svg" alt=""/> */}
                        <span>CodeIgniter Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/wordpress-development"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/wordpress.svg" alt=""/> */}
                        <span>Wordpress Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/shopify-development"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/shopify.svg" alt=""/> */}
                        <span>Shopify Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>UI/UX Design Services</h1>
                    </Nav>
                    <Navs to={"/services/designing-services/psd-html-design-services"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/ux-design%201.png" alt=""/> */}
                        <span>PSD to HTML Design Services</span>
                    </Navs>
                    <Navs to={"/services/designing-services/responsive-website-design"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/responsive%201.png" alt=""/> */}
                        <span>Responsive web design</span>
                    </Navs>
                    <Navs to={"/services/designing-services/mobile-application-design"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/mobile-application%201.png" alt=""/> */}
                        <span>Mobile App Design</span>
                    </Navs>
                    <Navs to={"/services/designing-services/design-prototype"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/graphic-designing%201.png" alt=""/> */}
                        <span>Design Prototype</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>API Integration Services</h1>
                    </Nav>
                    <Navs to={"/services/api-integration-services/payment-api"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/dgvdv.png" alt=""/> */}
                        <span>Payment API</span>
                    </Navs>
                    <Navs to={"/services/api-integration-services/shipping-api"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/shipping-time%201.png" alt=""/> */}
                        <span>Shipping API</span>
                    </Navs>
                    <Navs to={"/services/api-integration-services/authentication-api"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/thumb-print%201.png" alt=""/> */}
                        <span>Authentication API</span>
                    </Navs>
                    <Navs to={"/services/api-integration-services/phone-verification-api"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/mobile%20(1)%201.png" alt=""/> */}
                        <span>Phone Verification API</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>AI/ ML Development</h1>
                    </Nav>
                    <Navs to={"/services/ai-ml/chatbot"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/chatbot.svg" alt=""/> */}
                        <span>Chatbot</span>
                    </Navs>
                    <Navs to={"/services/ai-ml/machine-learning"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/machine-learning.svg" alt=""/> */}
                        <span>Machine Learning Development</span>
                    </Navs>
                    <Navs to={"/services/ai-ml/tensorflow"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/tensor-flow.svg" alt=""/> */}
                        <span>TensorFlow Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Mobile Applications Development</h1>
                    </Nav>
                    <Navs to={"/services/mobile-app-development/ios-application"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/app-store%201.png" alt=""/> */}
                        <span>IOS Application Development</span>
                    </Navs>
                    <Navs to={"/services/mobile-app-development/android-application"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/android.png" alt=""/> */}
                        <span>Android Application Development</span>
                    </Navs>
                    <Navs to={"/services/mobile-app-development/react-native-application"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457%202.png" alt=""/> */}
                        <span>React Native Apps Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Digital Marketing Services</h1>
                    </Nav>
                    <Navs to={"/services/digital-marketing/seo"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/seo%201.png" alt=""/> */}
                        <span>SEO Services</span>
                    </Navs>
                    <Navs to={"/services/digital-marketing/smo"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/g3001.png" alt=""/> */}
                        <span>SMO Services</span>
                    </Navs>
                    <Navs to={"/services/digital-marketing/orm"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/orm%201.png" alt=""/> */}
                        <span>ORM Services</span>
                    </Navs>
                    <Navs to={"/services/digital-marketing/ppc"} onClick={()=>{
                        setIsOpens(false);
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/xvzdc%20.png" alt=""/> */}
                        <span>PPC Services</span>
                    </Navs>
                </Holder>
            </Wrapper>
        </Container>
    )
}
export default MyHover;

const Navs = styled(Link)`
    text-decoration:none;
    color:#000;
    align-self:flex-end;
    width:90%;
    margin-bottom:20px;
    img{
        height:20px;
        width:20px;
        object-fit:contain;
    }
`

const Nav = styled.div`
    h1{
        font-size:16px;
    }
`

const Holder = styled.div`
    width:300px;
    display:flex;
    flex-direction:column;
    margin:20px;
`

const Wrapper = styled.div`
    width:98%;
    height:500px;
    display:flex;
    flex-wrap:wrap;
    overflow:auto;
    background-color:#ecdd84;

    
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
        top:89px;
        z-index:3;
    }
`
