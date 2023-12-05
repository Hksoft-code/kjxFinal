
import styled from "styled-components"
import logo from "../../assets/favicon2.svg"
import Img from "../../assets/laptop.jpg"
import { FaLocationDot } from "react-icons/fa6"
import { HiMail } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import indian from "../../assets/indiaflag.png"
import bgImag from '../../assets/otherImage/footerbg.jpg'
import footerImg from '../../assets/otherImage/footer_image.png'
import foterImg from '../../assets/otherImage/footer_img.png'
import footer from '../../assets/otherImage/footer-corner.png'

const FooterSection = () => {
    return (
        <div class="bg-white -mt-10 bg-gradient-to-b from-emerald-200 to-emerald-100">
            <div class="mx-auto max-w-7xl px-2 lg:px-2">
                <div class="mx-auto mt-16 max-w-2xl  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div class="text-center  lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div class="mx-auto max-w-lg px-8">
                                <img src={logo} />

                                <p class="mt-6 text-lg leading-5 text-gray-600">We Believe In Maximizing The Output</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-8 sm:p-10 lg:flex-auto ">
                        <h3 class="text-2xl font-bold tracking-tight text-gray-900 ">Contact Us</h3>
                        <div class="mt-10 flex items-center gap-x-4">
                            <div class="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul role="list" class=" text-right mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <Div>
                                <Holder className="item-end">
                                    <Icon>
                                        <FaLocationDot />
                                    </Icon>
                                    <Spans> KANTI SADAN , KURTHAUL BAGICHA , KURTHAUL PATNA-804453</Spans>
                                </Holder>
                                <Holder>
                                    <Icon>
                                        <FaLocationDot />
                                    </Icon>
                                    <Spans> JAGATSINGHPUR , ODISHA , 754103</Spans>
                                </Holder>
                                <Holder>
                                    <Icon>
                                        <HiMail />
                                    </Icon>
                                    <Spans> hrdepartment@kjxsofttech.com </Spans>
                                </Holder>
                                <Holders>
                                    <Icon>
                                        <FaPhoneAlt />
                                    </Icon>
                                    <Hold>
                                        <HolderTwo>
                                            <P>
                                                <Icons src={indian} alt="flag" />
                                                INDIA :
                                            </P>
                                            <Span>(+91) 9661087999 </Span>
                                        </HolderTwo>
                                    </Hold>
                                </Holders>
                            </Div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default FooterSection;

const P = styled.p`
    margin:0;
    color:#000;
    display:flex;
    img {
        border-radius: 30%; }
`

const HolderTwo = styled.div`
    margin-bottom: 20px;
`

const Icons = styled.img`
    width:40px;
    height:30px;
    color:#fff;
    margin-right:10px;
    object-fit:contain;
`

const Icon = styled.div`
    width:30px;
    height:30px;
    /* background-color:gray; */
    margin-right:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`

const Holders = styled.div`
    width:100%;
    margin:20px 0px;
    display: flex;
    justify-content: center;
`

const Hold = styled.div`
    width:80%;
    height: 60px;
    display: flex;
    flex-direction: column;
`

const Holder = styled.div`
    width:100%;
    margin:20px 0px;
    display: flex;
    justify-content: right;
`

const Div = styled.div`
    
`

const Li = styled(Link)`
    width:100%;
    font-size: 15px;
    cursor: pointer;
    /* margin:0px 20px; */
    color:#000;
    text-decoration:none;
    transition:all 500ms;
`

const Line = styled.div`
    width:70px;
    margin:20px 0px;
    color:#fff;
    border:2px solid #000;
`

const H1 = styled.h1`
    margin:0;
    font-size: 20px;
    color:#000;
`

const Title = styled.div`
 @media (max-width:767px){
       text-align: -webkit-center;
    }
`

const Ul = styled.div`
    width:50%;
    margin:20px 0px;
    display: flex;
    flex-direction: column;

       
    @media (min-width:767px){
        margin:unset;
    }
`

const Spans = styled.span`
    width:80%;
    color:#000;
    font-size: 16px;
`

const Span = styled.span`
    margin:10px 0px;
    width:70%;
    color:#000;
    word-spacing:5px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-content:space-around ;
`

const Navs = styled.div`
    width:100%;
     @media (max-width:767px){
       text-align: -webkit-center;
    }
`

const Logo = styled.img`
    width:150px;
    height:70px;
    object-fit:contain;

     @media (max-width:767px){
        text-align: -webkit-center;
    }
`

const Wrapper = styled.div`
    width:97%;
    height:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:flex-start;
    padding: 20px 0px;

    @media (min-width:1025px){
        width:89%;
    }

    
    @media (min-width:767px){
        flex-direction: unset;
    }
`

const Footer = styled.footer`
    width:100%;
    background-image:url(${footer});
    background-repeat:no-repeat;
    background-size:cover;
    
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:17px;
`