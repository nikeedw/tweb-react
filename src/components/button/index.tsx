import React from 'react'
import { Button as NextButton } from "@nextui-org/react";

type Props = {
	children: React.ReactNode;
	icon?: JSX.Element;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	fullWidth?: boolean;
	color?: 
		'default' | 
		'primary' | 
		'secondary' | 
		'success' | 
		'warning' | 
		'danger' | 
		undefined; 
}

const Button: React.FC<Props> = ({
	children,
	icon,
	className,
	type,
	fullWidth,
	color
}) => {
	return (
		<NextButton
			startContent={icon}
			size='lg'
			color={color}
			variant='light'
			className={ className }
			type={type}
			fullWidth={fullWidth}
		>
			{children}
		</NextButton>
	)
}

export default Button
