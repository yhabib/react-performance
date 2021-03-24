import {useState} from 'react'
import './App.css'
import Greet from './Greet'
import Search from './Search'
import {useForceRerender} from './utils'

function App() {
  const [visibleExample, setVisibleExample] = useState(false)
  const rerender = useForceRerender()

  return (
    <div className="App">
      <h1>React performance</h1>

      <button onClick={rerender}>Rerender page</button>
      <button onClick={() => setVisibleExample('search')}>Show Search</button>
      <button onClick={() => setVisibleExample('greet')}>Show Greet</button>

      {visibleExample === 'search' ? <Search /> : null}
      {visibleExample === 'greet' ? <Greet /> : null}
    </div>
  )
}

export default App
