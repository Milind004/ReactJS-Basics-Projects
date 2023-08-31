export const Button = (props)=>{
    const className = `btn btn-${props.className} `;
    const clicked=()=>{
        props.fn(props.value); //child calling parent logic
        console.log('Clicked Happen...', props.value)
    }
    return <button onClick={clicked} className = {className} >{props.value}</button>
}