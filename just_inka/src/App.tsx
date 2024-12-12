import { useState } from 'react'
import './App.css'
import Menu  from './components/Menu';

class Test {
  constructor(private name: string, private count: number) {}

  public logMe(): void {
    console.log(this.name + this.count)
  }
}

function App() {
  const [count, setCount] = useState(0);

  const x = new Test('test', 7);

  x.logMe();

  return (
    <>
    <Menu />
    </>
  )
}

export default App
