/* @flow */

export type Contact = {
  kind: 'phone' | 'email',
  value: string
}

export type Address = {
  street: string,
  city: string,
  zipCode: string,
}

export type Customer = {
  firstName: string,
  lastName: string,
  address: Address,
  contacts: Array<Contact>
}

export type Note = {
  username: string,
  date: string,
  text: string
}

export type Tag = {
  id: number,
  text: string
}

export type Hole = {
  kind: 'energy' | 'water',
  depth: number,
  notes: Array<Note>,
  tags: Array<Tag>
}

export type Project = {
  _id: string,
  customer: Customer,
  address: Address,
  holes: Array<Hole>,
  notes: Array<Note>,
  tags: Array<Tag>
}
