import React from 'react'
import styled from 'styled-components'

export default function Check() {
  return (
    <First>
        <div>Check out the live demo to learn how RazorpayX works. <span>No sign-up required!</span></div>
        <button>Check out the demo<img src='/images/rightwhitearrow.svg' /></button>
    </First>
  )
}

const First = styled.div`
    width:85.5%;
    border:1px solid #505876;
    margin-left: auto;
    margin-right: auto;
    margin-top:60px;
    height:20vh;
    border-radius: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 40px;
    > div{
      /* background-color:blue; */
      width:75%;
      font-size:20px;
      color:#E2E3E3;
      > span{
          /* width:25%; */
        font-weight:650;
        font-size:20px;
        color:#ffffff;
      }
    }
    > button{
      width:27%;
      height:9vh;
      border-radius: 5px;
      background-color: #2A84EB;
      border-style: none;
      color:#ffffff;
      display:flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 16px;
      align-items: center;
      padding:0 20px;
      position: relative;
      > img{
        margin-right: 10px;
        z-index: 1;
      }
    }
    > button::after{
        content: "";
        top:-3.5px;
        position:absolute;
        transform:rotateY(180deg);
        clip-path:polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        background-color:#5BC7AD;
        width:65px;
        height:58px;
        opacity:0.9;
        margin-left: 170px;
    }
`;