import { Action } from "redux"
import { ThunkAction } from "redux-thunk"

export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_USER = "FETCH_USER"

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

export interface FetchPostsAction {
  type: typeof FETCH_POSTS
  payload: Post[]
}

export interface FetchUserAction {
  type: typeof FETCH_USER
  payload: User
}

export type PostsState = {
  posts: Post[]
}

export type UserState = {
  users: User[]
}

type RootState = PostsState & UserState

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
