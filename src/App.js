import React, {useState} from 'react'

import './App.css'
import {useForceRerender} from './utils'

const Search = React.lazy(() => import('./Search'))

function App() {
  const [showSearch, setShowSearch] = useState(false)
  const rerender = useForceRerender()

  return (
    <div className="App">
      <h1>React performance</h1>

      <button onClick={rerender}>Rerender page</button>
      <button onClick={() => setShowSearch(true)}>Show Search</button>
      {showSearch ? <Search /> : null}
      <React.Suspense fallback={<>Loading ....</>}></React.Suspense>
    </div>
  )
}

export default App
