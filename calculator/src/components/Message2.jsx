export const Message =({value,className,resultValue})=>{
    const myClass = `alert alert-${className} text-center`;
    return <h1 className = {myClass} >{value} {resultValue}</h1>
}