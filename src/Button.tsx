type ButtonProps={
value:String
click:(e:React.MouseEvent)=>void
}
const Button= (props:ButtonProps)=>{
    const clickHandler=()=>{
alert("Button clicked")
    }
    return(
        <>
        <button onClick={props.click}>{props.value}</button>
        </>
    )
}
export default Button