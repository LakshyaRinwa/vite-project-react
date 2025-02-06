// function greeting(){
//     return(
//         <>
//         Welcome to greeting
//         </>
//     )
// }
// export default greeting;

//3rd
//afc shortcut
// async function greeting3(params:type) {
    
// }

// 2nd way

// type GreetingProps{
//     name:"Lakshya",
//     years:22
// }
type GreetingProps={
    name:String,
    years?:number,
    children:React.ReactNode
}
const Greeting = (props:GreetingProps) => {
    return (
        <>
            <div>Welcome to greeting</div>
            <div>Name: {props.name}</div> {/* Render props.name */}
            <div>Years: {props.years}-{props.children}</div>
        </>
    );
};

export default Greeting;
