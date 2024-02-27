import React from 'react'
import Button from '../button';

type Props = {
	children: React.ReactNode;
	icon: JSX.Element;
}

const NavButton: React.FC<Props> = ({ children, icon }) => {
	return (
		<div>
			<Button className='flex justify-start text-xl w-[100%]' icon={icon}>
				{ children }
			</Button>
		</div>
	)
}

export default NavButton
