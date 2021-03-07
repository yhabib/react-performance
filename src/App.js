import {useState} from 'react'
import './App.css'
import Search from './Search'
import {useForceRerender} from './utils'

function App() {
  const [showSearch, setShowSearch] = useState(false)
  const rerender = useForceRerender()

  return (
    <div className="App">
      <h1>React performance</h1>

      <button onClick={rerender}>Rerender page</button>
      <button onClick={() => setShowSearch(true)}>Show Search</button>

      {showSearch ? <Search /> : null}
    </div>
  )
}

export default App
