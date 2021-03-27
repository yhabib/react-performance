/** @jsxImportSource @emotion/react */
import {matchSorter} from 'match-sorter'
import {memo, useMemo, useState} from 'react'
import data from './data.json'

const getItems = filter => {
  if (!filter) return data

  return matchSorter(data, filter, {
    keys: ['place'],
  })
}

function Entry({i, zipcode, place}) {
  return <li key={i} style={{padding: '5px 0'}}>{`${zipcode} : ${place}`}</li>
}

const MemoEntry = memo(Entry)

function Search() {
  const [filter, setFilter] = useState('')
  const zipcodes = useMemo(() => getItems(filter), [filter])

  return (
    <div
      style={{
        padding: '5px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      }}
    >
      <h3>Swiss Zipcodes</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor="place">Search for place</label>
        <input
          id="place"
          style={{marginLeft: '10px', padding: '5px'}}
          type="search"
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <ul
        style={{
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
          <MemoEntry i={i} zipcode={zip.zipcode} place={zip.place} />
        ))}
      </ul>
    </div>
  )
}

export default Search
