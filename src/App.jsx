import { useState } from 'react'
import GatosContainers from './containers/GatosContainers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <GatosContainers></GatosContainers>
    </div>
    </>
  )
}

export default App