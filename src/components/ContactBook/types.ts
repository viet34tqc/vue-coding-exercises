export type Person = {
  id: string
  name: string
  city: string
}

export type Persons = Record<Person['id'], Person>
