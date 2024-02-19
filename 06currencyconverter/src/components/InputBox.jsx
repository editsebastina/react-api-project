import React, { useId } from 'react'

function InputBox({
    label, 
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {

  const id = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
        <div className="w-1-2">
            <label htmlFor={id} className="">{ label }</label>
            <input 
                className="w-full bg-transparent outline-none"
                id={id}
                type="number"
                placeholder="Amount"
                disabled= {amountDisabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="flex flex-wrap justify-end w-1/2 text-right">
            <p className="w-full mb-2 text-black/40">Currency Type</p>
            <select 
                className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                name={selectedCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisabled}>
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox