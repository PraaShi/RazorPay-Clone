import React from 'react'
import styled from 'styled-components'

export default function Note() {
  return (
    <Main>
      <div>Not sure which product to choose?</div>
      <p>Answer a few questions and we’ll help you out</p>
      <span>Find me a product<img src='/images/bluerightarrow.svg' /></span>
    </Main>
  )
}

const Main = styled.div`
  margin-top:4.5vh;
  width:85%;
  background: hsla(216, 82%, 94%, 1);
  background: linear-gradient(270deg, hsla(216, 82%, 94%, 1) 0%, hsla(216, 100%, 95%, 1) 30%, hsla(214, 88%, 97%, 1) 70%, hsla(203, 80%, 98%, 1) 100%);
  background: -moz-linear-gradient(270deg, hsla(216, 82%, 94%, 1) 0%, hsla(216, 100%, 95%, 1) 30%, hsla(214, 88%, 97%, 1) 70%, hsla(203, 80%, 98%, 1) 100%);
  background: -webkit-linear-gradient(270deg, hsla(216, 82%, 94%, 1) 0%, hsla(216, 100%, 95%, 1) 30%, hsla(214, 88%, 97%, 1) 70%, hsla(203, 80%, 98%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#E1ECFC", endColorstr="#E6F0FF", GradientType=1 );
  margin-left: auto;
  margin-right: auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:10vh;
  padding:0px 190px;
  border-radius:6px;
  border: 1px solid #BBD8FB;
  > div{
    font-size: 14.5px;
    font-weight: 650;
  }
  > p{
    font-size: 14px;
  }
  > span{
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size:14.5px;
    letter-spacing: 0.5px;
    color:#0A72E6;
    font-weight:600;
    > img{
      width:18px;
      margin-top: 2px;
    }
  }
`;