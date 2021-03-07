/** @jsxImportSource @emotion/react */
import {matchSorter} from 'match-sorter'
import {useState} from 'react'
import data from './data.json'

const getItems = filter => {
  if (!filter) return data

  return matchSorter(data, filter, {
    keys: ['place'],
  })
}

function Search({rerender}) {
  const [filter, setFilter] = useState('')
  const zipcodes = getItems(filter)

  return (
    <div
      css={{
        padding: '5px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      }}
    >
      <h3>Swiss Zipcodes</h3>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor="place">Search for place</label>
        <input
          id="place"
          css={{marginLeft: '10px', padding: '5px'}}
          type="search"
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <ul
        css={{
          height: '500px',
          overflowY: 'auto',
          border: '1px solid black',
          borderRadius: '4px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          marginTop: '20px',
          width: '400px',
        }}
      >
        {zipcodes.map((zip, i) => (
          <li
            key={i}
            css={{
              padding: '5px 0',
              ':hover': {
                backgroundColor: 'lightGrey',
              },
            }}
          >{`${zip.zipcode} : ${zip.place}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search
