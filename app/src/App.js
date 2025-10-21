import {useEffect, useState } from 'react';
import {finnhub_apikey} from './API_key.js' 
import CompanyProfile from './components/CompanyProfile';
import YourInput from './components/Input';
const finnhub = require('finnhub');

function App() {
    const [ticker,setTicker] = useState('OPEN');
    const [price, setPrice] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyLogo,setCompanyLogo] = useState('');
    const [run, setRun]=  useState(true);
    
    function run_function(){
        setRun(!run);
    }

    useEffect(() => {
            //create a connection with finnhub
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = finnhub_apikey;
            const finnhubClient = new finnhub.DefaultApi()
            finnhubClient.quote({'symbol': ticker}, (error, data, response) => {
                console.log(data);
                setPrice(data.pc);
            });
            finnhubClient.companyProfile2({'symbol': ticker}, (error, data, response) => {
                setCompanyName(data.name)
                setCompanyLogo(data.logo)
            });
    }, [run]);

    return (
      <div className = "d-flex justify-content-center" style={{padding:"2em 0"}}>
            <div>
                <div className = "d-flex" style= {{marginBottom:""}}>
                    <h1 >{companyName} </h1>
                    <img src={companyLogo} alt="logo" style={{height:"55.99px", marginLeft:"1em"}}></img>
                </div>
                <YourInput
                    ticker = {ticker}
                    setTicker = {setTicker}
                    run_function = {run_function}
                />
                <CompanyProfile
                    companyName = {companyName}
                    companyPrice = {price}
                />
            </div>
      </div>
    );
}
export default App;