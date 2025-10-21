

export default function Input(
    {
        ticker,
        setTicker,
        run_function
    }
){
    return (
        <div style={{width:"50%"}}>
            <h5 style= {{marginBottom:"1em"}}>Your Input</h5>
            <table>
                <tr>
                    <label>
                        Stock Ticker: <input value = {ticker} name="stock_ticker" onChange={e => setTicker(e.target.value)}/>
                    </label>
                </tr>
                <button id = "run_button" onClick={run_function} className="button">
                    Search
                </button>
            </table>
        </div> 
    )
}