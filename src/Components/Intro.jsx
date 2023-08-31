import React from 'react'
import styled from 'styled-components'

export default function Intro() {
  return (
    <Int>
      <Lef>
        <p>Power your finance,
          grow your business
        </p>
        <div> </div>
        <div>Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</div>
        <button>Sign Up Now<img src='/images/rightwhitearrow.svg' /></button> 
      </Lef>
      <Rig>
        <img src='/images/Introimage.jpg'></img>
      </Rig>
    </Int>
  )
}

const Int = styled.div`
    width:100%;
    background-color: #04032D;
    color:white;
    height:120vh;
    display:flex;
    clip-path: polygon(100% 0, 100% 92%, 92% 100%, 0 86%, 0 0);
    padding:0px 100px;
`;



const Rig = styled.div`
  width:62%;
  img{
      width:100%;
    }
  background-color: #04032D;
  /* background-color: aliceblue; */
`;

const Lef = styled.div`
  width:38%;
  background-color:#04032D;
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap:5vh;
  padding-bottom:150px;
  > div:nth-child(2){
      height:4px;
      width:24px;
      background-color:#61CEA6;
    }
  > div:nth-child(3){
      letter-spacing: 1px;
      font-size:18px;
      color:#B1B0BD;
      font-weight: 400;
  }
  > p:nth-child(1){ //power
    font-weight: 700;
    font-size: 39px;
    line-height: 50px;;
  }
  > button{
      background-color:#2B85EB;
      color:white;
      border:none;
      padding:15px 5px;
      width:155px;
      border-radius: 5px;
      font-size: 17px;
      font-weight: 550;
      display: flex;
      justify-content: center;
      align-items: center;
      gap:6px;
      > img{
        width:14px;
      }
    }
  
`;