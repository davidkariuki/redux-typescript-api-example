import { FETCH_USER, User, FetchUserAction } from "../shared/types"

const usersReducer = (state: User[] = [], action: FetchUserAction): User[] => {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload]
    default:
      return state
  }
}

export default usersReducer
