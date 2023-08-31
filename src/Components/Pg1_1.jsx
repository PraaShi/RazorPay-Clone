import React from 'react'
import styled from 'styled-components'

export default function Pg1_1() {
  return (
    <Main>
      <p>Supercharge your business with the all‑powerful <span>Payment Gateway</span></p>
      <div>
        <p><img src='/images/greentick.png' /><div>
        100+ Payment Methods</div>
        </p>
        <p><img src='/images/greentick.png' />
        <div>Industry Leading Success Rate</div>
        </p>
        <p><img src='/images/greentick.png' />
        <div>Superior Checkout Experience</div>
        </p>
        <p><img src='/images/greentick.png' />
        <div>Easy to Integrate</div>
        </p>
        <p><img src='/images/greentick.png' />
        <div>Instant Settlements from day 1</div>
        </p>
        <p><img src='/images/greentick.png' />
        <div>In-depth Reporting and Insights</div>
        </p>
      </div>
      <div>
        <button>Sign Up Now<img src='/images/rightwhitearrow.svg' /></button>
        <p>Know More<img src='/images/bluerightarrow.svg' /></p>
      </div>
      <img src='/images/payment-gateway.png' />
    </Main>
  )
}

const Main = styled.div`
width:85%;
height:510px;
/* background-color: #208220; */
border:1px solid #E3E2E3;
margin:0 auto;
padding:40px 50px;
border-radius: 12px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 14vh;
position:relative;
  > p:nth-child(1){
    font-size:29px;
    font-weight: 600;
    width:56%;
    > span{
      color:#2A90EE;
    }
  }
  > div:nth-child(3){
    display: flex;
    width:285px;
    justify-content:space-between;
    align-items: center;
    /* background-color: #E3E2E3; */
    > button{ //sign up now
        background-color:#2B85EB;
        color:white;
        border:none;
        padding:15px 5px;
        width:158px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 550;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:6px;
        > img{
          width:16px;
        }
      }
    > p{ //know more
      color: #0A72E6;
      font-size:16.5px;
      font-weight:600;
      display: flex;
      /* background-color: #40f18a; */
      justify-content:center;
      align-items:center;
      gap:4px;
      img{
        width:16px;
        margin-top:5px;
      }
    }
  }
  > div:nth-child(2){
    display:flex;
    flex-direction:column;
    gap:10px;
    > p{
      color:#190001;
      font-size:17px;
      display: flex;
      gap:10px;
      align-items: center;
      > img{
        /* background-color:blue; */
        width:17px;
        height: 16px;
        opacity: 0.4;
      }
    }
  }
  > img{
    position: absolute;
    width:600px;
    height:510px;
    right:0;
    top:0;
    bottom: 0;
  }
`;