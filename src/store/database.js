import PouchDb from 'pouchdb'

PouchDb.plugin(require('pouchdb-authentication'))

export const remote = PouchDb('https://localhost:6984', { skipSetup: true })
