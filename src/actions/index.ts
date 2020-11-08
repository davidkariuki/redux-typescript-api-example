import _ from "lodash"
import { FETCH_POSTS, FETCH_USER, AppThunk } from "../shared/types"
import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPostsAndUsers = (): AppThunk => async (
  dispatch,
  getState
) => {
  await dispatch(fetchPosts())

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = (): AppThunk => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts")

  dispatch({ type: FETCH_POSTS, payload: response.data })
}

export const fetchUser = (id: number): AppThunk => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: FETCH_USER, payload: response.data })
}

//export const fetchUser = (id: number): AppThunk => (dispatch) =>
//  _fetchUser(id, dispatch)

//  const _fetchUser = _.memoize(async (id: number, dispatch) => {
//  const response = await jsonPlaceholder.get(`/users/${id}`)

//  dispatch({ type: FETCH_USER, payload: response.data })
//})
