import React from 'react'
import styled from 'styled-components'

export default function Manage() {
  return (
    <Main>
      <Left>
        <div>Manage your company’s finances and supercharge your business banking with</div>
        <img src='images/Razorpay X.svg'/>
        <div>
            <p><img src='/images/greentick.png' /><div>Open a fully digital current account</div></p>
            <p><img src='/images/greentick.png' /><div>Automate payables & compliment payments</div></p>
            <p><img src='/images/greentick.png' /><div>Simplify and track spends with Corporate cards</div></p>
            <p><img src='/images/greentick.png' /><div>View financial insights at a glance</div></p>
        </div>
        <div>
            <button>Sign Up<img src='/images/rightwhitearrow.svg' /></button>
            <p>Know More<img src='/images/bluerightarrow.svg' /></p>
        </div>
      </Left>
      <Right>
        <img src='images/x-graphic.png' />
      </Right>
    </Main>
  )
}

const Main = styled.div`
    width:85.5%;
    border: 1px solid #535B76;
    margin-left: auto;
    margin-right: auto;
    height:84vh;
    border-radius: 10px;
    padding:6.9vh 3.8vw 6.9vh 3.8vw;
    margin-top: 80px;
    display:flex;
    position:relative;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    position:relative;
    height:100%;
    
    > div:first-child{
        color:#ffffff;
        font-size: 28px;
        font-weight:700;
        width:52%;
        /* letter-spacing: 0.4px; */
        line-height: 45px;
        /* font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif  */
    }
    > img:nth-child(2){
        position:absolute;
        width:170px;
        top:99px;
        left:65px;
    }
    > div:nth-child(3){ //p
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        width:31vw;
        height:23vh;
        /* background-color: #2B85EB; */
        > p{
            color:#E3E2E3;
            font-size:16px;
            display: flex;
            gap:15px;
            align-items: center;
            > img{
                width:17px;
                height: 16px;
                opacity: 0.4;
                /* color:#84DFCB; */
            }
        }
    }
    > div:nth-child(4){ //sign
        display: flex;
        width:300px;
        justify-content:space-between;
        align-items: center;
        /* background-color: #ffffff; */
        > button{ //sign up
            background-color:#2B85EB;
            color:white;
            border:none;
            padding:15px 5px;
            width:165px;
            border-radius: 5px;
            font-size: 15px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
            gap:40px;
            position: relative;
            > img{
                width:20px;
                margin-right: 15px;
                z-index:1;
            }
        }
        > button::after{
        content: "";
        top:-3.5px;
        position:absolute;
        transform:rotateY(180deg);
        clip-path:polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        background-color:#5BC7AD;
        width:60px;
        height:58px;
        opacity:0.9;
        margin-left: 80px;
        }
        > p{
        color: #0A72E6;
        font-size:16.5px;
        font-weight:650;
        display: flex;
        /* background-color: #40f18a; */
        justify-content:center;
        align-items:center;
        gap:4px;
        > img{
            width:16px;
            margin-top:5px;
        }
        }
    }
    /* background-color: #ffffff; */
`;

const Right = styled.div`
 
    background-color: #46b210;
    > img{
        position:absolute;
        top:0;
        right:0;
        width:47vw;
        height:84vh;
        /* bottom:20px; */
    }
`;