/** @jsxImportSource @emotion/react */
import {useEffect, useState} from 'react'
import {useAsync} from './utils'
import {getItemsAsync} from './workerized-get-items'

function Search() {
  const [filter, setFilter] = useState('')

  const {data: allItems, run} = useAsync({data: []})
  useEffect(() => {
    run(getItemsAsync(filter))
  }, [filter, run])
  const zipcodes = allItems.slice(0, 100)
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
