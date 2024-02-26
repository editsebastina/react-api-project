import React from 'react'

function Button({ 
    children, 
    type="button", 
    onClick,
    bgColor="bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props} >{children}</button>
  )
}

export default Button