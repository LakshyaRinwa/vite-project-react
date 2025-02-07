import './App.css'
import Greeting from './Greeting.tsx'
import Button from './Button.tsx';
import Type from './Types.tsx'
import Controls from './Controls.tsx';

const clickHandlerSend=(e:React.MouseEvent)=>{
  let target=e.target as HTMLButtonElement;
  alert( target.innerText+" button clicked")
}
const clickHandlerclick=(e:React.MouseEvent)=>{
  let target=e.target as HTMLButtonElement;
  alert( target.innerText+" button clicked")
}
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
      <Button value="Send" click={clickHandlerSend}/>
      <Button value="click" click={clickHandlerclick}/>
      <Controls/>
    </>
  )
}

export default App
