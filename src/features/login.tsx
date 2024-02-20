import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';
import { Button, Link } from '@nextui-org/react';

type Login = {
	email: string,
	password: string
}

type Props = {
	setSelected: (value: string) => void;
}

const Login: FC<Props> = ({setSelected}) => {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<Login>({
		mode: "onChange",
		reValidateMode: "onBlur",
		defaultValues: {
			email: '',
			password: ''
		}
	});

	return (
		<form className='flex flex-col gap-4'>
			<Input 
				control={control}
				name="email"
				label="Email"
				type="email"
				required='Обязательное поле'
			/>
			<Input 
				control={control}
				name="password"
				label="Пароль"
				type="password"
				required='Обязательное поле'
			/>

			<p className="text-center text-small">
				Нет аккаунта?{"	"}
				<Link
					size='sm'
					className='cursor-pointer'
					onPress={() => setSelected("sign-up")}
				>
					Зарегестрируйтесь
				</Link>
			</p>
			<div className="flex gap-2 justify-end">
				<Button fullWidth color='primary' type='submit'>
					Войти
				</Button>
			</div>
		</form>
	)
}

export default Login
