import React from 'react'
import { styled } from 'styled-components'


export default function Features() {
    const segments = [
        {
            title:'Payment Links',
            desc: 'Share payment link via an email, SMS. messenger, chatbot etc. and get paid immediately',
            icon: '/images/paymentlinks.svg',
        },
        {
            title:'Payment Pages',
            desc: 'Take your store online instantly with zero coding. Accept international & domestic payments',
            icon: '/images/paymentpages.svg',
        },
        {
            title:'Payment Buttons',
            desc: 'Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more',
            icon: '/images/paymentbutton.svg',
        },
        {
            title:'Subscriptions',
            desc: 'Subscription plans with automated recurring transactions on various payment modes',
            icon: '/images/subscriptions.svg',
        },
        {
            title:'Route',
            desc: "Split incoming payments automatically to vendor's accounts, manage marketplace money flow...",
            icon: '/images/route.svg',
        },
        {
            title:'Smart Collect',
            desc: 'Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Customer Identifiers & UP|-IDs',
            icon: '/images/smartcollection.svg',
        },
    ]
  return (
    <Main>
        {
            segments.map(item =>(
                <div>
                    <img className='card' src='/images/card.svg' />
                    <div>
                        <div>{item.title}</div>
                        <div>{item.desc}</div>
                        <div>
                            <span>Know More</span>
                            <img src='/images/bluerightarrow.svg' />
                        </div>
                        {/* <div className='topcurve'> */}

                        {/* </div> */}
                       
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
    width: 100%;
    margin-top:10vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap:2.2vw;
    grid-row-gap:6vh;
    place-items: center;
    padding: 0 7.5vw;
    > div{
        position:relative;
        /* clip-path: polygon(0 0, 71% 0, 100% 36%, 100% 100%, 0 100%); */
        /* border-radius: 10px; */
        width:339px;
        /* background-color: #84184a; */
        height:223px;
        >img{
            position: absolute;
            z-index: -1;
            /* border:1px solid; */
            /* width:700px; */
        }
        > div:nth-child(2){ 
            height:100%;
            padding:1.5vw 1.8vw;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            /* position:relative; */
            /* background-color: antiquewhite; */
            > div:nth-child(1){ //title
                color:#162F56;
                font-weight: 700;
                font-size: 22px;
                letter-spacing: 0.5px;
            }
            > div:nth-child(2){
                color:#808497;
                width:92%;
                font-weight: 400;
            }
            > div:nth-child(3){
                display: flex;
                /* justify-content: center; */
                align-items: center;
                width:40%;
                /* margin-top: 5px; */
                /* background-color: antiquewhite; */
                > span{ //know more
                    color:#3387EB;
                    font-weight:550;
                    font-size: 17px;;
                }
                > img{
                    width:18px;
                    margin-top:4px;
                }
            }
        }
        >div:nth-child(3){
                
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
    >div::after{
        content:url('images/wave.svg');
        position: absolute;
        top:155px;
        right:0;
        /* height:30px; */
        /* width:5px; */
        /* visibility:hidden; */
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    >div:hover::after{
        visibility:visible;
        opacity: 1;
    }
    
    >div:hover{
        .card{
        /* -webkit-filter: drop-shadow(0px 7px 30px  rgba(100, 100, 111, 0.2)); */
        filter: drop-shadow(0px 0px 15px #e7e8e9);
        /* transition: box-shadow 0.5s ease; */
    }
        
        /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    }


    /* .topcurve{
        position: absolute;
        width:10px;
        height:10px;
        background-color: #f01818;
        top:0;
        left:229px;
        border-top-right-radius: 30px;
    } */
`;

