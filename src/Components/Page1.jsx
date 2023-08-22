import React from 'react'
import styled from 'styled-components'
import Pg1_1 from './Pg1_1';

export default function Page1() {
  return (
    <Mai>
        <One>
            <p>Accept Payments with Razorpay Payment Suite</p>
            <div></div>
        </One>
        <Pg1_1 />
    </Mai>
  )
}

const One = styled.div`
    display: flex;
    flex-direction: column;
    gap:11px;
    align-items: center;
    margin-top: 7vh;
    > p{
        font-weight:650;
        /* display: none; */
        font-size: 25px;
        color:#02042A;
    }
    > div{
        height:4px;
        width:24px;
        background-color:#61CEA6;
    }
`;

const Mai = styled.div`
    width:100%;
    /* clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 78%); */
`;