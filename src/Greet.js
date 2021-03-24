import React, {useState} from 'react'

function Input({value, id, onChange}) {
  return (
    <label>
      Name:
      <input
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        type="text"
      />
    </label>
  )
}

export default function Greet() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div style={{marginTop: '50px'}}>
      <div>
        <label htmlFor="name">Name</label>
        <Input id="name" value={firstName} onChange={setFirstName} />
      </div>
      <div>
        <label htmlFor="surname">Last name</label>
        <Input id="surname" value={lastName} onChange={setLastName} />
      </div>

      <h2>My name is {`${lastName}, ${firstName} ${lastName}`}</h2>
    </div>
  )
}
