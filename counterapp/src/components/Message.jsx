export const Message =({value,className,countValue})=>{
    const myClass = `alert alert-${className} text-center`;
    return <h1 className = {myClass} >{value} {countValue}</h1>
}