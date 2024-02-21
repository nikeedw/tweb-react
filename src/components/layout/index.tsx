import React, { useEffect } from 'react'
import Header from '../header'
import Container from '../container'
import Navbar from '../navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated, selectUser } from '../../features/user/userSlice'

const Layout = () => {
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const user = useSelector(selectUser);
	const navigate = useNavigate();

	useEffect(() => {
		if(!isAuthenticated) {
			navigate('/auth');
		}
	}, [])

	return (
		<>
			<Header />
			<Container>
				<div className="flex-2 p-4">
					<Navbar />
				</div>
				<div className='flex-1 p-4'>
					<Outlet />
				</div>
			</Container>
		</>
	)
}

export default Layout
