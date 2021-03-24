import {matchSorter} from 'match-sorter'
import data from './data.json'

export const getItems = filter => {
  console.log('filtering');
  if (!filter) return data

  return matchSorter(data, filter, {
    keys: ['place'],
  })
}
