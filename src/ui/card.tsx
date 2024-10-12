import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`bg-white shadow rounded-lg p-4 ${className}`}>{children}</div>
}

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`mb-2 ${className}`}>{children}</div>
}

export const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
}

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}