import React from 'react'
import NavButton from '../nav-button'
import { BsPostcard } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className="flex flex-col gap-5">
					<Link to='/'>
						<NavButton icon={<BsPostcard />}>
							Посты
						</NavButton>
					</Link>
					<Link to='following'>
						<NavButton icon={<FiUsers />}>
							Подписки
						</NavButton>
					</Link>
					<Link to='followers'>
						<NavButton icon={<FaUsers />}>
							Подписчики
						</NavButton>
					</Link>
			</div>
		</nav>
	)
}

export default Navbar
