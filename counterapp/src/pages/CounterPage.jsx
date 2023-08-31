import React, { useState } from 'react'
import { Message } from '../components/Message'
import { Button } from '../components/Button'

const CounterPage = () => {
    //let count = 0;
    const [count, setCount] = useState(0); //now u can do state handling
    const logic=(buttonValue)=>{
        if(buttonValue === '+'){
            setCount(count +1) //re rendering(will call this fn again)
            //count++;
        }
        else{
            setCount(count -1)
            //count--;
        }
        console.log('Count is ', count);
    }
    return (
        <div className="container">
            <Message className="info" value="Counter App" />
            <Message className="success" value="Count value is" countValue={count} />
            <Button fn={logic} className="success" value="+" />
            <Button fn={logic} className="danger" value="-" />

        </div>
    )
}

export default CounterPage