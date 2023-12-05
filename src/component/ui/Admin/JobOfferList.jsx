import React,{useEffect, useState} from "react"
import axios from "axios"

import styled from "styled-components"

import {useAuth} from "./AuthContext"
import { Link } from "react-router-dom"

const JoinUs = () =>{

    const [data,setData] = useState([])
    const [work,setWork] = useState([])
    const [loading, setLoading] = useState(true);

    const {state} = useAuth()

    useEffect(()=>{
        axios.get("https://kj-x-softtech-api.onrender.com/api/v2/all-job").then((res)=>{
            setData(res.data.AllJob)
            setLoading(false);
        }).catch((error)=>{
            console.log(error)
            setLoading(false);
        })
        axios.get("https://kj-x-softtech-api.onrender.com/api/v2/all-work").then((res)=>{
          setWork(res.data.AllJob)
          setLoading(false);
      }).catch((error)=>{
          console.log(error)
          setLoading(false);
      })
    },[data,work])

    const Delete = async (id) =>{
      try{
        await axios.delete(`https://kj-x-softtech-api.onrender.com/api/v2/delete-job/${id}`).catch((error)=>{
          console.log(error.message)
        })
      }catch(error){
        console.log(error.message)
      }
    }

    const DeleteWork = async (id) =>{
      try{
        await axios.delete(`https://kj-x-softtech-api.onrender.com/api/v2/delete-work/${id}`).catch((error)=>{
          console.log(error.message)
        })
      }catch(error){
        console.log(error.message)
      }
    }

    return(
        <>
          {loading ? (
            <LoadingMessage>Loading...</LoadingMessage> // Display loading message while loading is true
          ) :(
            <>
            {
              state?(
                <Cards>
              {
                data?.map((item) =>(
                  <Card key={item.id}>
                    <HolderTwo>
                      <Div>
                        <Image src={"image"} alt={"title"}/>
                      </Div>
                      <H2>{item.title}</H2>
                      <P2>{item.expirence}</P2>
                      <Button onClick={()=>{
                        Delete(item._id)
                      }}>
                        Delete
                      </Button>
                    </HolderTwo>
                  </Card>
                ))
              }
            </Cards>
              ):(
                <Cards>
                {
                  work?.map((item) =>(
                    <Card key={item.id}>
                      <HolderTwo>
                        <Div>
                          <Image src={"image"} alt={"title"}/>
                        </Div>
                        <H2>{item.title}</H2>
                        <P2>{item.discription}</P2>
                        <Button onClick={()=>{
                          DeleteWork(item._id)
                        }}>
                          Delete
                        </Button>
                      </HolderTwo>
                    </Card>
                  ))
                }
              </Cards>
              )
            }
            </>
          )}
        </>
    )
}

export default JoinUs;

const LoadingMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #006400;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height:300px;
`

const HolderTwo = styled.div`
    width:100%;
    height:250px;
    padding:20px 0px;
    background-color:whitesmoke;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    border:1px solid lightgray;
    border-radius:10px;
`

const Button = styled.button`   
    width:100px;
    height:40px;
    border:none;
    border-radius: 50px;
    color:#fff;
    display:flex;
    justify-content: center;
    align-items:center;
    font-weight:bold;
    text-decoration:none;
    padding:0px 20px;
    background:linear-gradient(110.92deg, #FFD700 8.54%, red 91.46%);
`

const Div = styled.div`
    width:80px;
    height:80px;
    background-color:whitesmoke;
    border:1px solid lightgray;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:-40px;
`

const P2 = styled.p`
    font-size: 15px;
    border-radius:5px;
    width:75%;
    padding:10px;
    background-color:#fff;
    font-weight: normal;
    color:grey; 
    text-align:center;
`

const H2 = styled.h2`
    margin:10px;
    width:80%;
    font-size:15px;
    text-align:center;
`

const Image = styled.img`
    width:60px;
    height:60px;
    object-fit:contain;
`

const Card = styled.div`
    width:90%;
    min-height:250px;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:30px;

    @media (min-width:766px){
      width:250px;
      padding:10px;
      margin:30px 0px;
      justify-content:unset;
      align-items:unset;
    }
`

const Cards = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:60px 0px 0px;
`