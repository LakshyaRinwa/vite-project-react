import './App.css'
import Greeting from './greeting.tsx'
import Type from './Types.tsx'
function App() {
  let data=22;
  return (
    <>
      <div className='bg-red-400 text-white'>
        welcome to react
      </div>
      <Greeting name="abc" years={data} >
        demo text
      </Greeting>
      <Type/>
    </>
  )
}

export default App
