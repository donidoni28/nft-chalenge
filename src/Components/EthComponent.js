import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { Time } from 'react-ionicons'
import Logo from '../images/icon-ethereum.svg'
export default function EthComponent() {
    let [value, setValue] = useState(0.041)
    let [time, setTime] = useState(3)
    return (
        <div className='d-flex flex-row justify-content-between'>
            
            <p style={{ fontWeight:'300',color: 'hsl(178, 100%, 50%)' }}><Image src={Logo}/>{value}ETH</p>
            <p style={{ fontWeight:'300',color: 'hsl(215, 51%, 70%)' }}>
                <span>
                    <Time color={'hsl(215, 51%, 70%)'} />
                </span>
                {time} days left</p>
        </div>
    )
}
