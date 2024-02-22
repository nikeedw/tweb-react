import React from 'react'

type Props = {
	children: string;
	size?: string;
}

const Typography: React.FC<Props> = ({
	children,
	size = 'text-xl'
}) => {
	return (
		<p className={`${size}`}>
			{children}
		</p>
	)
}

export default Typography
