import styled from "styled-components"
import { Link } from "react-router-dom"

const MyHover = ({ Dropdowns, Toggol }) => {
    return (
        <Container>
            <Nav1
                onClick={() => {
                    Dropdowns(false)

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // Optional: smooth scrolling animation
                    });
                }}
            >Back</Nav1>
            <Nav2 to={"/services"}
                onClick={() => {
                    Dropdowns(false)
                    Toggol(false)

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // Optional: smooth scrolling animation
                    });
                }}
            >
                <h1>All Services</h1>
            </Nav2>
            <Wrapper>
                <Holder>
                    <Nav>
                        <h1>Python Frameworks</h1>
                    </Nav>
                    <Navs to={"/services/django-development"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/django.svg" alt=""/> */}
                        <span>Django Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/flask"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/Frame%207.png" alt=""/> */}
                        <span>Flask Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/fastapi"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/flash%201.png" alt=""/> */}
                        <span>Fast API Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/kafka"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/kafka.svg" alt=""/> */}
                        <span>Kafka Development</span>
                    </Navs>
                    <Navs to={"/services/python-frameworks/grafana"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/grafana.svg" alt=""/> */}
                        <span>Grafana Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>MVC Frameworks</h1>
                    </Nav>
                    <Navs to={"/services/mvc-frameworks/react-js"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457%202.png" alt=""/> */}
                        <span>React JS Development</span>
                    </Navs>
                    <Navs to={"/services/mvc-frameworks/vue-js"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/vue%201.png" alt=""/> */}
                        <span>Vue JS Development</span>
                    </Navs>
                    <Navs to={"/services/mvc-frameworks/angular-js"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/angular%201.png" alt=""/> */}
                        <span>Angular JS Development</span>
                    </Navs>
                    <Navs to={"/services/mvc-frameworks/node-js"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/node-js%201.png" alt=""/> */}
                        <span>Node JS Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>PHP Frameworks & CMS</h1>
                    </Nav>
                    <Navs to={"/services/php-frameworks/laravel-development"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/laravel%202.png" alt=""/> */}
                        <span>Laravel Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/cake-php-framework"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/cakephp.svg" alt=""/> */}
                        <span>CakePHP Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/codigniter-development"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/codeigniter.svg" alt=""/> */}
                        <span>CodeIgniter Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/wordpress-development"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/wordpress.svg" alt=""/> */}
                        <span>Wordpress Development</span>
                    </Navs>
                    <Navs to={"/services/php-frameworks/shopify-development"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/shopify.svg" alt=""/> */}
                        <span>Shopify Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>UI/UX Design Services</h1>
                    </Nav>
                    <Navs to={"/services/designing-services/psd-html-design-services"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/ux-design%201.png" alt=""/> */}
                        <span>PSD to HTML Design Services</span>
                    </Navs>
                    <Navs to={"/services/designing-services/responsive-website-design"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/responsive%201.png" alt=""/> */}
                        <span>Responsive web design</span>
                    </Navs>
                    <Navs to={"/services/designing-services/mobile-application-design"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/mobile-application%201.png" alt=""/> */}
                        <span>Mobile App Design</span>
                    </Navs>
                    <Navs to={"/services/designing-services/design-prototype"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/graphic-designing%201.png" alt=""/> */}
                        <span>Design Prototype</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>API Integration Services</h1>
                    </Nav>
                    <Navs to={"/services/api-integration-services/payment-api"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/dgvdv.png" alt=""/> */}
                        <span>Payment API</span>
                    </Navs>
                    <Navs to={"/services/api-integration-services/shipping-api"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/shipping-time%201.png" alt=""/> */}
                        <span>Shipping API</span>
                    </Navs>
                    <Navs to={"/services/api-integration-services/authentication-api"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/thumb-print%201.png" alt=""/> */}
                        <span>Authentication API</span>
                    </Navs>
                    <Navs to={"/services/api-integration-services/phone-verification-api"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/mobile%20(1)%201.png" alt=""/> */}
                        <span>Phone Verification API</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>AI/ ML Development</h1>
                    </Nav>
                    <Navs to={"/services/ai-ml/chatbot"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/chatbot.svg" alt=""/> */}
                        <span>Chatbot</span>
                    </Navs>
                    <Navs to={"/services/ai-ml/machine-learning"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/machine-learning.svg" alt=""/> */}
                        <span>Machine Learning Development</span>
                    </Navs>
                    <Navs to={"/services/ai-ml/tensorflow"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/tensor-flow.svg" alt=""/> */}
                        <span>TensorFlow Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Mobile Applications Development</h1>
                    </Nav>
                    <Navs to={"/services/mobile-app-development/ios-application"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/app-store%201.png" alt=""/> */}
                        <span>IOS Application Development</span>
                    </Navs>
                    <Navs to={"/services/mobile-app-development/android-application"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/android.png" alt=""/> */}
                        <span>Android Application Development</span>
                    </Navs>
                    <Navs to={"/services/mobile-app-development/react-native-application"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457%202.png" alt=""/> */}
                        <span>React Native Apps Development</span>
                    </Navs>
                </Holder>
                <Holder>
                    <Nav>
                        <h1>Digital Marketing Services</h1>
                    </Nav>
                    <Navs to={"/services/digital-marketing/seo"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/seo%201.png" alt=""/> */}
                        <span>SEO Services</span>
                    </Navs>
                    <Navs to={"/services/digital-marketing/smo"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/g3001.png" alt=""/> */}
                        <span>SMO Services</span>
                    </Navs>
                    <Navs to={"/services/digital-marketing/orm"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/orm%201.png" alt=""/> */}
                        <span>ORM Services</span>
                    </Navs>
                    <Navs to={"/services/digital-marketing/ppc"}
                        onClick={() => {
                            Dropdowns(false)
                            Toggol(false)

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }}
                    >
                        {/* <img src="https://avioxtechnologies.com/static/images/xvzdc%20.png" alt=""/> */}
                        <span>PPC Services</span>
                    </Navs>
                </Holder>
            </Wrapper>
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
    display:flex;
    width:90%;
    height:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:absolute;
    background-color:#ecdd84;
    z-index:20;
    overflow:auto;

    @media (min-width:990px){
        display:none;
    }
`

