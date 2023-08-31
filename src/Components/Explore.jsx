import React from 'react'
import styled from 'styled-components'
import Manage from './Manage';
import Options from './Options';
import Check from './Check';

export default function Explore() {
  return (
    <Explo>
        <One>
            <p>Explore RazorpayX powered Business Banking</p>
            <div></div>
        </One>
        <Manage /> 
        <Options />
        <Check />
    </Explo>
  )
}

const Explo = styled.div`
    background-color: #191C2F;
    height:300vh;
    position:relative;
    /* clip-path: polygon(0 0, 100% 20%, 100% 60%, 71% 72%, 28% 56%, 0 90%); */
    clip-path: polygon(0 0, 100% 10%, 100% 87%, 72% 92%, 28% 85%, 0 100%);
    /* height:300vh; */
`;

const One = styled.div`
    /* margin-top:200px; */
    padding-top: 250px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:11px;
    > p{
        color:#FFFFFF;
        font-size: 25px;
        font-weight:650;
    }
    > div{
        background-color: #60CEA7;
        height:4px;
        width:24px;
    }
`;