import { useCallback, useMemo } from 'react'
import './App.css'

function App() {
  const name: string = useMemo((): string => 'Vishesh', []);
  const value: () => string = useCallback(() => name, []);
  console.log(value);
  return (
    <>
      Hello World
    </>
  )
}

export default App