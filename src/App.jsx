import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { fromJSON } from 'postcss'

function App() {

const [FromValue,setFromValue]=useState(0);
const [FromCurrency,setFromCurrency]=useState('usd');
const [ToCurrency,setToCurrency]=useState('inr');
const [ToValue,setToValue]=useState(0);

const data=useCurrencyInfo(FromCurrency);

let allKeys=['usd','inr']
allKeys=Object.keys(data)
//console.log(allKeys)
console.log(FromCurrency)


useEffect(()=>{

    const value=FromValue*data[ToCurrency] || 0;
    console.log('in use effect',value)
setToValue(value)
console.log('from app.js ',ToValue)
},[FromCurrency,ToCurrency,FromValue,data])


  return (
    <>
     <Card
     Fromhere="From"
     setValue={setFromValue}
     allKeys={allKeys}
     Val={FromValue}
    setCurrency={setFromCurrency}
     />
     <button className='bg-orange-200'>Swap</button>
     <Card
      Fromhere="To"
      setValue={setToValue}
      Val={ToValue}
      allKeys={allKeys}
      setCurrency={setToCurrency}
     />
    </>
  )
}

export default App
