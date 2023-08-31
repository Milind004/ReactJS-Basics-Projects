import React, { useState } from 'react'
import { Message } from '../components/Message2'
import { Button } from '../components/Button2'

export const CalculatorPage = () => {
  const [result, setResult] = useState('');

  const logic=(buttonValue)=>{
    if (buttonValue === '='){
        setResult(eval(result))
    }
    else if(buttonValue === 'AC'){
        setResult(' ')
    }
    else{
        setResult(result+ buttonValue.toString())
    }

  }
    
    
  return (
    <>
        <Message className="danger" value="CALCULATOR" />
        <Message className="info" value= "Answer is " resultValue={result}/>
        <tr>
        <td><Button fn={logic} className= "success" value= "("/></td>
        <td><Button fn={logic} className= "success" value= ")"/></td>
        <td><Button fn={logic} className= "success" value= "%"/></td>
        <td><Button fn={logic} className= "success" value= "AC"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "primary" value= "7"/></td>
        <td><Button fn={logic} className= "primary" value= "8"/></td>
        <td><Button fn={logic} className= "primary" value= "9"/></td>
        <td><Button fn={logic} className= "success" value= "/"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "primary" value= "4"/></td>
        <td><Button fn={logic} className= "primary" value= "5"/></td>
        <td><Button fn={logic} className= "primary" value= "6"/></td>
        <td><Button fn={logic} className= "success" value= "*"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "primary" value= "1"/></td>
        <td><Button fn={logic} className= "primary" value= "2"/></td>
        <td><Button fn={logic} className= "primary" value= "3"/></td>
        <td><Button fn={logic} className= "success" value= "-"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "primary" value= "0"/></td>
        <td><Button fn={logic} className= "primary" value= "."/></td>
        <td><Button fn={logic} className= "success" value= "="/></td>
        <td><Button fn={logic} className= "success" value= "+"/></td>
        </tr>

    </>
  )
}