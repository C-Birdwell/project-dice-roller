import { USERNAME, ROOM_ID } from '../utils'

const INITIAL_STATE = {
  userName: '',
  roomID: '',
}

export const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        userName: action.payload,
      }

    case ROOM_ID:
      return {
        ...state,
        roomID: action.payload,
      }

    default:
      return { ...state }
  }
}
