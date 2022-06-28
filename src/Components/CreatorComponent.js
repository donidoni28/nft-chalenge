import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import Logo from '../images/image-avatar.png'

export default function CreatorComponent() {
    let [state,setState] = useState(false)
    let handleOver = ()=>{
        setState(true)
    }
    let handleLeave = ()=>{
        setState(false)
    }
    console.log(state)
    return (
        <div className='d-flex flex-row align-items-center pt-1' style={{borderTop:'1px solid hsl(215, 32%, 27%)'}}>
            <Image height={'35rem'} className='border border-2 border-light rounded-circle  me-2' src={Logo}/>
            <p className='pt-3' style={{fontWeight:'300',color:'hsl(215, 51%, 70%)'}}>Creation of <span onMouseLeave={handleLeave} onMouseOver={handleOver} style={state? {color:'hsl(178, 100%, 50%)'} : {color:'hsl(0, 0%, 100%)'}}>Jules Wyvern</span></p>
        </div>
    )
}
