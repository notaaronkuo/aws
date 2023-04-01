// import logo from './logo.svg';
// import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
API.configure(awsconfig);

const myAPI = "api720d8ea9";
const path = '/customers';

const App = () => {
    const [input, setInput] = useState("")
    const [customers, setCustomers] = useState([])

    //Function to fetch from our backend and update customers array
    function getCustomer(e) {
        console.log("app.js line 15")
        let customerId = e
        console.log(e)
        API.get(myAPI, "/customers/" + customerId, {})
            .then(response => {
                console.log("app.js line 19")
                console.log(response)
                let newCustomers = [...customers]
                newCustomers.push(response)
                setCustomers(newCustomers)

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div className="App">
            <h1>Super Simple React App</h1>
            <div>
                <input placeholder="customer id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <br/>
            <button onClick={() => getCustomer({input})}>Get Customer From Backend</button>

            <h2 style={{visibility: customers.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
            {
                customers.map((thisCustomer, index) => {
                    return (
                        <div key={thisCustomer.customerId}>
                            <span><b>CustomerId:</b> {thisCustomer.customerId} - <b>CustomerName</b>: {thisCustomer.customerName}</span>
                        </div>)
                })
            }
        </div>
    )
}

export default App;
