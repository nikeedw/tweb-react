import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Импортируем функции createApi и fetchBaseQuery из библиотеки Redux Toolkit
import { User } from "../types"; // Импортируем тип User из файла ../types

// Создаем API для работы с пользователями
export const userApi = createApi({
  reducerPath: "userApi", // Указываем путь для редюсера
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Указываем базовый URL для запросов
  
  // Определяем набор эндпоинтов
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string }, // Тип данных возвращаемых из мутации
      { email: string; password: string } // Тип данных, ожидаемых в запросе
    >({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<
      { email: string; password: string; name: string }, // Тип данных возвращаемых из мутации
      { email: string; password: string; name: string } // Тип данных, ожидаемых в запросе
    >({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<User, void>({
      query: () => ({
        url: "/current",
        method: "GET",
      }),
    }),
    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation<User, { userData: FormData; id: string }>({
      query: ({ userData, id }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
  }),
});

// Экспортируем хуки для использования в компонентах
export const {
  useRegisterMutation,
  useLoginMutation,
  useCurrentQuery,
  useLazyCurrentQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useUpdateUserMutation,
} = userApi;

// Экспортируем отдельные эндпоинты для использования в других частях кода
export const {
  endpoints: { login, register, current, getUserById, updateUser },
} = userApi;
