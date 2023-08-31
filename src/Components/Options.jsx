import React from 'react'
import styled from 'styled-components'

export default function Options() {
const segments = [
    {
        title:'Current Account',
        desc:'Current accounts for fast-growing businesses, supported by the best-in- class technology',
        icon:'/images/home.svg',
    },
    {
        title:'Payouts',
        desc:'Make simple, reliable & secure payouts to bank accounts, UPI IDs or wallets',
        icon:'/images/send.svg',
    },
    {
        title:'Payroll',
        desc:'Set your payroll and compliances like TDS, ESIC, PT, & PF on autopilot.',
        icon:'/images/mail.svg',
    },
]
  return (
    <Main>
        {
        segments.map(item =>(
            <div>
                <img className='card' src='/images/bluecard.svg' />
                <div>
                    <div>{item.title}</div>
                    <div>{item.desc}</div>
                    <div>
                        <span>Know More</span>
                        <img src='/images/bluerightarrow.svg' />
                    </div>
                </div>
                <div>
                    <img src={item.icon} />
                </div>
            </div>
         ))
        } 
    </Main>
  )
}

const Main = styled.div`
    margin-top: 60px;
    margin-left:auto;
    margin-right: auto;
    width:85.5%;
    /* background-color: #ffffff; */
    height:39vh;
    display:flex;
    justify-content: space-between;
    position:relative;
    > div{
        position:relative;
        > img:first-child{
            position: absolute;
            z-index: -1;
        }
        &::after{
            opacity:0;
            content:url('/images/wave2.svg');
            position:absolute;
            top:128px;
            right:0;
        }
        &:hover::after{
            opacity:1;
            transition: opacity 0.5s ease;
        }
        &:hover{
            .card{
            filter: drop-shadow(0px 0px 20px #0000005c);
            }
        }
        > div:nth-child(2){
            /* background-color: white; */
            height:39vh;
            width: 26.4vw;
            padding:4vh 1.5vw;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            > div:nth-child(1){
                color:#ffffff;
                font-size:21px;
                font-weight:800;
            }
            > div:nth-child(2){
                color:#A2A4AA;
            }
            > div:nth-child(3){
                display:flex;
                /* justify-content:center; */
                align-items: center;
                > span{ //know more
                    color:#3387EB;
                    font-weight:550;
                    font-size: 17px;;
                }
                > img{
                    /* background-color: #3387EB; */
                    width:18px;
                    margin-top:5px;
                    /* margin-bottom: 5px; */
                }
            }
        }
        > div:nth-child(3){
            img{
                width:50px;
                z-index:-2;
                background-color:#2A84EB;
                position: absolute;
                top:6.5px;
                border-radius:50px;
                right:9px;     
            }
        }
     
    }
`;
