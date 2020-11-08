import React, { FC, useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"

import { fetchPostsAndUsers } from "../actions"
import { PostsState } from "../shared/types"
import UserHeader from "./UserHeader"

const mapState = (state: PostsState): PostsState => {
  return { posts: state.posts }
}

const connector = connect(mapState, { fetchPostsAndUsers })
type PostListProps = ConnectedProps<typeof connector>

const PostList: FC<PostListProps> = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers()
  }, [fetchPostsAndUsers])

  const renderList = () => {
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  return <div className="ui relaxed divided list">{renderList()}</div>
}

export default connector(PostList)
