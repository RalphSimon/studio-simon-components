import React, { type FC } from 'react'
import './Button.css'

export interface ButtonProps {
	label: string
}

const Button: FC<ButtonProps> = ({ label }) => {
	return <button>{label}</button>
}

export default Button
