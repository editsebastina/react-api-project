import { useState, useEffect} from 'react'

function useCurrencyInfo(currency){

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(response => response.json())
        .then(data => setData(data[currency]))
        .catch(error => console.error('Unable to reneder data:', error))
    }, [currency])

    console.log("The data: " + data);
    return data

}

export default useCurrencyInfo