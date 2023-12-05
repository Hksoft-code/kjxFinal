import React  from "react"
import styled from "styled-components"
import designing from "../../../assets/designing.jpg"
import UIUX from "../../../assets/UIUX.webp"
import frontend from "../../../assets/frontent.png"
import responsive from "../../../assets/responsive-website.png"
import mobileapp from "../../../assets/illustration-19.png"
import prototype from "../../../assets/prototype.png"
import cloudservice from "../../../assets/cloudservice.jpg"
import azure from "../../../assets/azure-top-band-image.png"
import aws from "../../../assets/aws.webp"
import gpu from "../../../assets/gpu.jpg"
import dataeng from "../../../assets/data-engineer.jpg"
import datastore from "../../../assets/data-store.png"
import dataprocess from "../../../assets/dataAnalysis.png"
import datadoc from "../../../assets/data-doc.png"
import dataint from "../../../assets/dataIntegration.png"
import mvc from "../../../assets/mvc.jpg"
import angular from "../../../assets/angular_brand.png"
import nodejs from "../../../assets/node_logo.png"
import vue from "../../../assets/vue_brand.png"
import reactjs from "../../../assets/react_brand.png"
import dataScience from '../../../assets/otherImage/data_science1.jpeg'

const OurServices = () =>{
    return(
        <Section>
            <Wrapper>
                <Title className='text-cyan-700'>Services</Title>
                <Holder>
                    <Text>
                        <H1>Our Services</H1>
                    </Text>
                          
                    <HolderTwo >
                        <Image >
                            <p className="p-8" >Designing Service</p>
                            <img src={designing} alt="designing-img"/>
                        </Image>
                        <CardHold>
                            <Card className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={UIUX} alt="UIUX-img"/>
                                <p className="text-slate-900 text-white">UI/UX DESIGN SERVICES</p>
                            </Card>
                            <Card className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={frontend} alt="frontend-img"/>
                                <p className="text-slate-900 text-white">FRONTEND DEVELOPMENT</p>
                            </Card>
                            <Card className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={responsive} alt="responsive-img"/>
                                <p className="text-slate-900 text-white">RESPONSIVE WEBSITE DESIGN</p>
                            </Card>
                            <Card className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={mobileapp} alt="mobileapp-img"/>
                                <p className="text-slate-900 text-white">MOBILE APPLICATION SERVICES</p>
                            </Card>
                            <Card className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={prototype} alt="prototype-img"/>
                                <p className="text-slate-900 text-white">DESIGN PROTOTYPING</p>
                            </Card>
                        </CardHold>
                    </HolderTwo>
                    
                    {/* <HolderTwo >
                        <Image>
                            <p>PHP Framework</p>
                            <img src="https://avioxtechnologies.com/static/images/php-services.png"/>
                        </Image>
                        <CardHold>
                            <Card>
                                <img src="https://avioxtechnologies.com/static/images/laravel-brands.png"/>
                                <p>LARAVEL DEVELOPMENT</p>
                            </Card>
                            <Card>
                                <img src="https://avioxtechnologies.com/static/images/cakephp-brands.png"/>
                                <p>CAKEPHP FRAMEWORK</p>
                            </Card>
                            <Card>
                                <img src="https://avioxtechnologies.com/static/images/symfony_brand.png"/>
                                <p>SYMFONY DEVELOPMENT</p>
                            </Card>
                        </CardHold>
                    </HolderTwo> */}
                    
                    <HolderTwo rw>
                        <Image>
                            <p className="p-8">Cloud Services</p>
                            <img src={cloudservice} alt="cloudservice-img"/>
                        </Image>
                        <CardHold>
                            <Card className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                                <img src={azure} alt="azure-img"/>
                                <p className="text-slate-900 text-white">Azure Services</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                               <img src="https://i.ibb.co/G38zPXn/what-is-amazon-web-services-aws-Photo-Room-png-Photo-Room.png" alt="aws-img"/>
                                <p className="text-slate-900 text-white">AWS Services</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src="https://i.ibb.co/mRd5cmB/hero16-9-machinelearning-portefolio.png" alt="gpu-img"/>
                                <p className="text-slate-900 text-white">GPU Service Development</p>
                            </Card>
                            {/* <Card>
                                <img src="https://avioxtechnologies.com/static/images/weppy.png"/>
                                <p>WEPPY</p>
                            </Card>
                            <Card>
                                <img src="https://avioxtechnologies.com/static/images/web2py.png"/>
                                <p>WEB2PY</p>
                            </Card> */}
                        </CardHold>
                    </HolderTwo>
                    {/* <span style={{fontSize:"30px",fontWeight:"bold"}} className="p-8">Data Engineering</span> */}
                    <HolderTwo >
                        <Image>
                           <p className="p-8">Data Engineering</p>
                           <img src={dataeng} alt="data-eng-img"/>
                        </Image>
                        <CardHold>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={datastore} alt="data-storage-img"/>
                                <p className="text-slate-900 text-white">Data Storage</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={dataprocess} alt="data-process-img"/>
                                <p className="text-slate-900 text-white">Data Processing</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={datadoc} alt="data-document-img"/>
                                <p className="text-slate-900 text-white">Data Documentation</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={dataint} alt="data-intergration-img"/>
                                <p className="text-slate-900 text-white">Data Integration</p>
                            </Card>
                        </CardHold>
                    </HolderTwo>

                    <HolderTwo rw>
                        <Image>
                           <p className="p-8">AI / ML</p>
                           <img src={dataScience} alt="data-eng-img"/>
                        </Image>
                        <CardHold>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src="https://i.ibb.co/LNzCRNh/1698535.png" alt="data-storage-img"/>
                                <p className="text-slate-900 text-white">Chatbot</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src="https://i.ibb.co/DWshj53/8637099.png" alt="data-process-img"/>
                                <p className="text-slate-900 text-white">Machine Learing</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src='https://i.ibb.co/G7m1hqH/68747470733a2f2f7777772e74656e736f72666c6f772e6f72672f696d616765732f74665f6c6f676f5f686f72697a6f6e74.png' alt="data-document-img"/>
                                <p className="text-slate-900 text-white">Tensorflow</p>
                            </Card>
                           
                        </CardHold>
                    </HolderTwo>
                    
                    <HolderTwo >
                        <Image>
                        {/* <p className="p-8">MVC Framework</p> */}
                          <img src={mvc} alt="mvc-img"/>
                        </Image>
                        <CardHold>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                                <img src={angular} alt="angular-img"/>
                                <p className="text-slate-900 text-white">ANGULAR JS</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r"> 
                            <img src={nodejs} alt="nodejs-img"/>
                                <p className="text-slate-900 text-white">NODE JS</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                            <img src={vue} alt="vue-img"/>
                                <p className="text-slate-900 text-white">VUE JS</p>
                            </Card>
                            <Card  className="group   ring-1 ring-slate-900/5 shadow-lg  bg-gradient-to-b from-teal-900 to-teal-700 hover:bg-gradient-to-r">
                              <img src={reactjs} alt="reactjs-img"/>
                                <p className="text-slate-900 text-white">REACT JS</p>
                            </Card>
                        </CardHold>
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default OurServices;

const Card = styled.div`
    width:100%;
    height:220px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    
    box-shadow: 0px 0px 5px lightgrey;
    border-radius:10px;
    padding:10px 0px;
    margin: 20px 0px;

    p{
        width:80%;
        text-align:center;
        /* margin:0 ; */
    }

    img{
        width:120px;
        height:120px;
        object-fit:contain;
    }
    
    @media (min-width:766px){
        width:300px;
        height:150px;
        margin: 10px;
        display: flex;
        justify-content:space-between;
        align-items:center;

        p{
            width:70%;
            font-size: 13px;
            font-weight: bold;
            text-align:center;
        }
    }
`

const HolderTwo = styled.div`
    width:100%;
    height:85%;
    padding: 30px 0px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width:766px){
        width:100%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        flex-direction: ${({rw})=> rw?"row": "row-reverse"};
    }   
`

const Image = styled.div`
    width:100%;
    font-weight:bold;
    img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
    p{
        font-size:30px;
        margin-bottom:0;
    }
    @media (min-width:766px){
        width:45%;
        align-self: flex-start;
    }  

    @media (min-width:1205px){
        height:500px;
        width: 50%;
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

const CardHold = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

    @media (min-width:766px){
        width:50%;
    }
`

const Text = styled.div`
    margin-top:20px;
`

const Holder = styled.div`
    width:100%;
    min-height: 88vh;
    height: 100%;
    align-self:center;

    @media (min-width:766px){
        width:95%;
        span{
            font-size:30px;
            margin-bottom:0;
            margin-top:10px;
        }
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    
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
    /* background-color: #E89E5A; */
    padding:20px 0px;
    color:#000;
`
