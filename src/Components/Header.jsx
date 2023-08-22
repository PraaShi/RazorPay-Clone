import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Head>
        <img src='/images/swip.avif'></img>
        <div>New</div>
        <div></div>
        <p>Say hello to the future of In-Store payments with Razorpay POS!
</p>
        <button>
            know More
        </button>
    </Head>
  )
}

const Head = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:10vh;
background: linear-gradient(90.06deg, #4332A3 0.03%, #286CD5 90.98%);
    p{
        color:white;
        font-weight: 550;
        margin-left:2vw;
    }
    button{
    color:#2B588A;
    background-color: #00FFD1;
    /* height:60%; */
    border-radius:3.5px;
    padding: 7px 14px;
    font-weight:600;
    border: none;
    font-size: 12px;
    margin-left:1.5vw;
    }
    div:nth-child(3){
        /* color: white; */
        height:50%;
        width:2px;
        margin-left:3vw;
        /* border: 1px solid; */
        background: radial-gradient(89.12% 50% at 0% 50%, #fbfbfb 0%, rgba(255, 255, 255, 0) 100%);
    }
    div:nth-child(2){
        color: #00FFD1;
        text-decoration: underline;
        margin-left:0.8vw;
    }
`;