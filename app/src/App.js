import {useEffect, useState } from 'react';
import Axios from 'axios';
import {finnhub_apikey} from './API_key.js' 
import CompanyProfile from './components/CompanyProfile';
import YourInput from './components/Input';
const finnhub = require('finnhub');

function App() {
    const [ticker,setTicker] = useState('OPEN');
    const [price, setPrice] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyLogo,setCompanyLogo] = useState('');
    const [companyBeta, setCompanyBeta]= useState('');
    const [companyPERatio, setCompanyPERatio] = useState('');
    const [run, setRun]=  useState(true);
    
    function run_function(){
        setRun(!run);
    }

    useEffect(() => {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = finnhub_apikey;
            const finnhubClient = new finnhub.DefaultApi();

            finnhubClient.quote(ticker, (error, data, response) => {
                setPrice(data.c);
            });
            finnhubClient.companyProfile2({'symbol': ticker}, (error, data, response) => {
                setCompanyName(data.name)
                setCompanyLogo(data.logo)
            });
            finnhubClient.companyBasicFinancials(ticker, 'all', (error, data, response) => {
                setCompanyBeta(data.metric.beta);
                setCompanyPERatio(data.metric.peTTM);
            });
            
    }, [run]);

    return (
      <div className = "d-flex justify-content-center" style={{padding:"2em 0"}}>
            <div>
                <YourInput
                    ticker = {ticker}
                    setTicker = {setTicker}
                    run_function = {run_function}
                />
            </div>
            <div>
                <CompanyProfile
                    companyName={companyName}
                    companyPrice={price}
                    companyLogo={companyLogo}
                    companyBeta={companyBeta}
                    companyPERatio={companyPERatio}
                />
            </div>
      </div>
    );
}
export default App;