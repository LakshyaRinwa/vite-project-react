import { ChangeEvent } from "react";
const Controls=()=>{
    let textData="";
    const changeHandler= (e:ChangeEvent)=>{
       let target= e.target as HTMLInputElement;
        textData=target.value;
    }
    const clickHandler=()=>{
        alert(textData)
    }
    return(
        <>
        <input type="text" onChange={changeHandler}/>
        <button onClick={clickHandler}>print</button>
        </>
    )
}
export default Controls;