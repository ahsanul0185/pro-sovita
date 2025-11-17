"use client"

import React from 'react'

const Button = ({onClick, className, children}) => {
  return (
    <button onClick={onClick} className={`bg-primary text-white cursor-pointer px-4 py-2 rounded-full hover:bg-primary/90 ${className}`}>{children}</button>
  )
}

export default Button