import SanchitComponent from "./components/sanchit-component.tsx";
import "./App.css";
import { useCallback, useMemo } from 'react'
import './App.css'
import { Card } from './components';

function App() {
  const name: string = useMemo((): string => 'Vishesh', []);

  const value: () => string = useCallback(() => name, []);
  console.log(value);
  const b = "New Line"
  console.log(b);

  const getName: () => string = useCallback(() => name, []);
  return (
    <>
      <SanchitComponent />
      <Card name={getName()} age={21} productName="Laptop" productPrice={10000} />
    </>
  );
}

export default App;
