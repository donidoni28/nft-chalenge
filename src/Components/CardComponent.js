import React, { useState } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import Logo from '../images/icon-view.svg'
import './cardComponent.css'

import CreatorComponent from './CreatorComponent'
import EthComponent from './EthComponent'

export default function CardComponent() {
    let [stateImg, setStateImg] = useState(false)
    let [stateTitle, setStateTitle] = useState(false)
    let handleLeave = (e) => {
        e.target.id === 'img'? setStateImg(false) : setStateTitle(false)
    }
    let handleOver = (e) => {
        e.target.id === 'img'? setStateImg(true) : setStateTitle(true)

    }
    // console.log(state);
    return (
        <div className='items'>

            <Card className='imgs p-3' style={{ width: '18rem', background: 'hsl(216, 50%, 16%)', borderRadius: '15px' }}>
                <div id='img'  onMouseLeave={(e)=>handleLeave(e)} onMouseOver={(e)=>handleOver(e)} className={`img ${stateImg?'over d-flex justify-content-center align-items-center':''}`} style={{ borderRadius: '10px' }} >
                    {
                        stateImg? <Image style={{zIndex:'1000'}} color={'hsl(0, 0%, 100%)'} src={Logo} /> : ''
                    }
                </div>
                <Card.Body className='text-white px-0'>
                    <Card.Title onMouseLeave={(e)=>handleLeave(e)} onMouseOver={(e)=>handleOver(e)} style={
                        stateTitle? {color:'hsl(178, 100%, 50%)',fontWeight:'800'} : {color:'hsl(0, 0%, 100%)',fontWeight:'800'}
                    }>Equilibrium #3429</Card.Title>
                    <Card.Text className='' style={{ fontWeight:'300', fontSize:'18px', color: 'hsl(215, 51%, 70%)' }}>
                        Our Equilibrium collection promotes balance and calm.
                    </Card.Text>
                    <EthComponent />
                    <CreatorComponent />
                </Card.Body>
            </Card>
        </div>
    )
}
