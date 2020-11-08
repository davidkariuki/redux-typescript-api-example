import React, { FC } from "react"
import { connect, ConnectedProps } from "react-redux"

import { User, UserState } from "../shared/types"

type OwnProps = {
  userId: number
}

const mapState = (
  state: UserState,
  ownProps: OwnProps
): { user: User | undefined } => {
  const user = state.users.find((user) => user.id === ownProps.userId)
  return { user }
}

const connector = connect(mapState)
type Props = ConnectedProps<typeof connector>

type UserHeaderProps = Props & OwnProps

const UserHeader: FC<UserHeaderProps> = ({ user }) => {
  return (
    <>
      <div className="header">{user?.name}</div>
    </>
  )
}

export default connector(UserHeader)
