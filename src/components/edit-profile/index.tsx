import React, { FC, useContext, useState } from 'react'
import { User } from '../../app/types';
import { ThemeContext } from '../theme-provider';
import { useUpdateUserMutation } from '../../app/services/userApi';
import { useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Modal, ModalBody, ModalHeader, ModalContent, Textarea, Button, ModalFooter } from '@nextui-org/react';
import { Input } from '../input';
import { MdOutlineEmail } from 'react-icons/md';
import { ErrorMessage } from '../error-message';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	user?: User;
}

const EditProfile: FC<Props> = ({ isOpen, onClose, user }) => {
	const { theme } = useContext(ThemeContext);
	const [ updateUser, { isLoading } ] = useUpdateUserMutation();
	const [error, setError] = useState('');
	const [selectedFile, setSelectedFile] = useState();
	const { id } = useParams<{id: string}>();

	const { handleSubmit, control } = useForm({
		mode: 'onChange',
		reValidateMode: 'onBlur',
		defaultValues: {
			email: user?.email,
			name: user?.name,
			dateOfBirth: user?.dateOfBirth,
			bio: user?.bio,
			location: user?.location
		}
	});

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			className={`${theme} text-foreground`}
		>
			<ModalContent>
				{
					(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Изменение профиля
							</ModalHeader>
							<ModalBody>
								<form className='flex flex-col gap-4'>
									<Input 
										control={control}
										name='email'
										label='Email'
										type='email'
										endContent={<MdOutlineEmail />}
									/>
									<Input 
										control={control}
										name='name'
										label='Имя'
										type='text'
									/>
									<input 
										type='file'
										name='avatarUrl'
										placeholder='Выберите файл'
									/>
									<Input 
										control={control}
										name='dateOfBirth'
										label='Дата рождения'
										type='date'
										placeholder='Дата рождения'
									/>
									<Controller 
										name='bio'
										control={control}
										render={({ field }) => (
											<Textarea 
												{...field}
												rows={4}
												placeholder='Ваша биография'
											/>
										)}
									/>
									<Input 
										control={control}
										name='location'
										label='Местоположение'
										type='text'
									/>
									<ErrorMessage error={error} />
									<div className="flex gap-2 justify-end">
										<Button
											fullWidth
											color='primary'
											type='submit'
											isLoading={isLoading}
										>
											Обновить
										</Button>
									</div>
								</form>
							</ModalBody>
							<ModalFooter>
								<Button
									color='danger'
									variant='light'
									onPress={onClose}
								>
									Закрыть
								</Button>
							</ModalFooter>
						</>
					)
				}
			</ModalContent>
		</Modal>
	)
}

export default EditProfile
