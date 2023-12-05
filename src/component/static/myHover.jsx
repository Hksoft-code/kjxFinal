import styled from "styled-components"
import { Link } from "react-router-dom"
import dj from '../../assets/icon/django.png'

const MyHover = ({ setIsOpen }) => {
    return (
        <Container>
            <Wrapper
                onMouseLeave={() => {
                    setIsOpen(false);
                }}
            >
                <Holder>
                    <Nav>
                        <h1>Hire Python Developers</h1>
                    </Nav>
                    <Navs to={"/hire-developers/django-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        <img src={dj} alt="" />
                        <span>Hire Django Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-flask-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/Frame%207.png" alt=""/> */}
                        <span>Hire Flask Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-fast-api-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/flash%201.png" alt=""/> */}
                        <span> Hire Fast API Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-kafka-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/kafka.svg" alt=""/> */}
                        <span>Hire Kafka Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-grafana-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/grafana.svg" alt=""/> */}
                        <span>Hire Grafana Developers</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire AI/ ML Developers</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-chatbot-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/chatbot.svg" alt=""/> */}
                        <span>Hire Chatbot Experts</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-ml-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/machine-learning.svg" alt=""/> */}
                        <span>Hire Machine Learning Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-tensorflow-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/tensor-flow.svg" alt=""/> */}
                        <span>Hire TensorFlow Experts</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire Front End Developers</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-react-js-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457%202.png" alt=""/> */}
                        <span>Hire React JS Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-vue-js-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/vue%201.png" alt=""/> */}
                        <span>Hire Vue JS Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-angular-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/angular%201.png" alt=""/> */}
                        <span>Hire Angular JS Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-node-js-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/node-js%201.png" alt=""/> */}
                        <span>Hire Node JS Developers</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire PHP Developers</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-laravel-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/laravel%202.png" alt=""/> */}
                        <span>Hire Laravel Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-cake-php-js-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/cakephp.svg" alt=""/> */}
                        <span>Hire CakePHP Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-codeIgniter-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/codeigniter.svg" alt=""/> */}
                        <span>Hire CodeIgniter Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-wordpress-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/wordpress.svg" alt=""/> */}
                        <span>Hire Wordpress Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-shopify-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/shopify.svg" alt=""/> */}
                        <span>Hire Shopify Developers</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire UI/UX Designers</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-graphic-designers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/graphic-designing%201.png" alt=""/> */}
                        <span>Hire Graphic Designers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-web-designers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/ux-design%201.png" alt=""/> */}
                        <span>Hire Web Designers</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire Mobile Developers</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-ios-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/app-store%201.png" alt=""/> */}
                        <span>Hire IOS Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-android-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/android.png" alt=""/> */}
                        <span>Hire Android Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-react-native-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457%202.png" alt=""/> */}
                        <span>Hire React Native Developers</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire Cloud Technologies Experts</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-aws-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/aws.svg" alt=""/> */}
                        <span>Hire AWS Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-azure-services-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/azure.svg" alt=""/> */}
                        <span>Hire Azure Services Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-big-data-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/big-data.svg" alt=""/> */}
                        <span>Hire Big Data Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-dynamodb-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/dynamodb.svg" alt=""/> */}
                        <span>Hire DynamoDB Developers</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-cloud-formation-developers"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/cloud-computing.svg" alt=""/> */}
                        <span>Hire Cloud Formation Developers</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire Digital Marketing Expert</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-seo-expert"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/seo%201.png" alt=""/> */}
                        <span>Hire SEO Expert</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-smo-expert"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/g3001.png" alt=""/> */}
                        <span>Hire SMO Expert</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-ppc-expert"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/orm%201.png" alt=""/> */}
                        <span>Hire PPC Expert</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-orm-expert"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/xvzdc%20.png" alt=""/> */}
                        <span>Hire ORM Expert</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Hire Quality Analyst</h1>
                    </Nav>
                    <Navs to={"/hire-developers/hire-manual-qa"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/manual_qa.png" alt=""/> */}
                        <span>Hire Manual QA</span>
                    </Navs>
                    <Navs to={"/hire-developers/hire-automated-qa"} onClick={() => {
                        setIsOpen(false)

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // Optional: smooth scrolling animation
                        });
                    }}>
                        {/* <img src="https://avioxtechnologies.com/static/images/automate_qa.png" alt=""/> */}
                        <span>Hire Automation QA</span>
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

