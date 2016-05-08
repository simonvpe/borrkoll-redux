/* @flow */

import { Project } from '../interfaces'

export const PROJECTS_INSERT = 'PROJECTS_INSERT'
export const PROJECTS_REMOVE = 'PROJECTS_REMOVE'
export const PROJECTS_UPDATE = 'PROJECTS_UPDATE'

export const insert = (project: Project) => ({
  type: PROJECTS_INSERT,
  payload: project
})

export const remove = (id: string) => ({
  type: PROJECTS_REMOVE,
  payload: id
})

export const update = (project: Project) => ({
  type: PROJECTS_UPDATE,
  payload: project
})


export const nextId = () => {
    // Id is milliseconds since 2016-01-01 00:00:00.000
  let now = new Date().getTime()
  let epoch = new Date(2016, 1, 1, 0, 0, 0, 0).getTime()
  return (now - epoch).toString()
}

const INITIAL_STATE = {
  docs: []
}

const ACTION_HANDLERS = {
  [PROJECTS_INSERT]: (state, action) => ({
    ...state,
    docs: state.docs.concat(action.payload)
  }),

  [PROJECTS_REMOVE]: (state, action) => ({
    ...state,
    docs: state.docs.filter((doc) => doc._id !== action.payload)
  }),

  [PROJECTS_UPDATE]: (state, action) => ({
    ...state,
    docs: state.docs.map((doc) => doc._id === action.payload._id ? action.payload : doc)
  })
}

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
