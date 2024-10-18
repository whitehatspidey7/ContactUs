import { useState } from 'react'
import './App.css'
import Nav from  './components/Nav/Nav'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Form from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main className='main_class'>
        <ContactHeader />
        <Form />
      </main>
    </>
  )
}

export default App;
