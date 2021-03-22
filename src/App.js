import React, {useState} from 'react'

import './App.css'
import {useForceRerender} from './utils'

const loadModule = () => import('./Search')
const Search = React.lazy(loadModule)

function App() {
  const [showSearch, setShowSearch] = useState(false)
  const rerender = useForceRerender()

  return (
    <div className="App">
      <h1>React performance</h1>

      <button onClick={rerender}>Rerender page</button>
      <button
        onClick={() => setShowSearch(true)}
        onFocus={loadModule}
        onMouseEnter={loadModule}
      >
        Show Search
      </button>
      <React.Suspense fallback={<>Loading ....</>}>
        {showSearch ? <Search /> : null}
      </React.Suspense>
    </div>
  )
}

export default App
