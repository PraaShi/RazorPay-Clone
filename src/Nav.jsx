import React from 'react'
import styled from 'styled-components'
export default function Nav() {
  return (
    <Na>
      <div>
        <img src='/images/NavLogo.svg' />
      </div>
      <div>
        <p>Payments</p>
        <p>Banking+</p>
        <p>Line of Credit</p>
        <p>Payroll</p>
        <p>Resources</p>
        <p>Support</p>
        <p>Pricing</p>
      </div>
      <div>
        <img src='/images/India.svg' />
        <img src='/images/downarrow.svg' />
      </div>
      {/* <img src='/images/downarrow.svg' /> */}
      <div>
        <button>Log In</button>
      </div>
      <div>
        <button>Sign Up<img src='/images/rightarrow.svg' /></button>
      </div>
    </Na>
  )
}

const Na = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    background-color: #04032D;
    height:15vh;
    div:first-child{ //Razorpaylogo
      cursor:pointer;
      /* margin-left:3vw; */
        img{
            width:130px;
        }
    }
    div:nth-child(2){ //menu
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin-left:3vw;
      /* background-color: #5399EE; */
      color: white;
      width:45%;
      font-size:16px;
      P{
       
      }
    }
    div:nth-child(3){ //indlogo
      margin-left:3vw;
      display: flex;
      align-items: center;
      height:100%;
      /* background-color: blue; */
      /* pointer-events: none; */
      img{
        width:30px;
        cursor: pointer;
      }
      img:nth-child(2){
        width:18px;
        cursor: pointer;
      }
    }

    div:nth-child(4){ //login
      margin-left:1vw;
        button{
            color: white;
            font-weight:600;
            background-color: #04032D;
            border-radius:0.1em ;
            border:groove #2B85EB;
            border-width: 1px;
            padding:0.9em 1.5em;
            cursor: pointer;
        }
    }
    div:last-child{ //signup
      margin-left:1vw;
        button{
            font-weight: 500;
            color:#5399EE;
            font-weight: 600;
            padding:0.9em 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            gap:6px;
            cursor: pointer;
        } 
        img{
          width:15px;
        }
    }
`;