const Type = ()=>{
    let data = 10;
    let arr:String[]=["a","b","c"];
    type objT={
        name:String,
        age?:number
    }
    let obj:objT={name:"Lakshya",age:22}
    return(
    <>
    value is {data}
    Arrvalue is {arr}
    {arr.map((item)=>{
        return <p>{item}</p>
    })}
    {obj.name}
    {obj.age}
   </>
    );
}
export default Type;