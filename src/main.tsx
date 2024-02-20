import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import {NextUIProvider} from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Layout from "./components/layout"
import Auth from "./pages/auth"
import Posts from "./pages/posts"
import CurrentPost from "./pages/current-post"
import UserProfile from "./pages/user-profile"
import Followers from "./pages/followers"
import Following from "./pages/following"

const container = document.getElementById("root")

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <Auth />
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Posts />
			},
			{
				path: "posts/:id",
				element: <CurrentPost />
			},
			{
				path: "/users/:id",
				element: <UserProfile />
			},
			{
				path: "/followers",
				element: <Followers />
			},
			{
				path: "/following",
				element: <Following />
			},
		]
	}
]);

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
				<NextUIProvider>
					<ThemeProvider>
						<RouterProvider router={router}/>
					</ThemeProvider>
				</NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
