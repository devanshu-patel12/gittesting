import { useCallback, useMemo } from 'react'
import './App.css'

function App() {
  const name: string = useMemo((): string => 'Vishesh', []);
  const getName: () => string = useCallback(() => name, []);
  console.log(getName, getName());
  return (
    <>
      Hello World
    </>
  )
}

export default App
