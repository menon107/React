import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border rounded px-2 py-1 ${className}`}
      {...props}
    />
  )
}