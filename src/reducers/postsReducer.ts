import { FETCH_POSTS, Post, FetchPostsAction } from "../shared/types"

const postsReducer = (state: Post[] = [], action: FetchPostsAction): Post[] => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload
    default:
      return state
  }
}

export default postsReducer
