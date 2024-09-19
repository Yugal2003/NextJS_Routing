'use client'
import React from 'react'

const CheckPriceUsingClientSide = ({price}) => {
  return (
    <div>
        <button onClick={()=>alert(`Price : ${price}`)}>Check Price</button>
    </div>
  )
}

export default CheckPriceUsingClientSide

