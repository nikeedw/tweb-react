import { Button, Textarea } from "@nextui-org/react"
import { IoMdCreate } from "react-icons/io"
import {
	useCreatePostMutation,
	useLazyGetAllPostsQuery,
	useLazyGetPostByIdQuery,
} from "../../app/services/postsApi"
import { useForm, Controller } from "react-hook-form"
import { ErrorMessage } from "../error-message"
import { useParams } from "react-router-dom"
import { createComment, useCreateCommentMutation } from "../../app/services/commentsApi"

export const CreateComment = () => {
	const { id } = useParams<{ id: string }>();
	const [createComment] = useCreateCommentMutation();
	const [getPostById] = useLazyGetPostByIdQuery();

	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue,
	} = useForm()

	const onSubmit = handleSubmit(async (data) => {
		try {
			if(id) {
				await createComment({ content: data.comment , postId: id }).unwrap()
				setValue("comment", "")
				await getPostById(id).unwrap();
			}
		} catch (error) {
			console.log("err", error)
		}
	})

	const error = errors?.post?.message as string

	return (
		<form className="flex-grow" onSubmit={onSubmit}>
			<Controller
				name="comment"
				control={control}
				defaultValue=""
				rules={{
					required: "Обязательное поле",
				}}
				render={({ field }) => (
					<Textarea
						{...field}
						labelPlacement="outside"
						placeholder="Напишите свой комментарий"
						className="mb-5"
					/>
				)}
			/>
			{errors && <ErrorMessage error={error} />}
			<Button
				color="primary"
				className="flex-end"
				endContent={<IoMdCreate />}
				type="submit"
			>
				Ответить
			</Button>
		</form>
	)
}