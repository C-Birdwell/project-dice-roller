import { USERNAME, ROOM_ID } from '../utils'

export const _onUserName = payload => ({
  type: USERNAME,
  payload,
})

export const _onRoomID = payload => ({
  type: ROOM_ID,
  payload,
})
