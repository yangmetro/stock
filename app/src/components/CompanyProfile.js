export default function CompanyProfile(
    {
        companyName,
        companyPrice,
        companyLogo,
        companyBeta,
        companyPERatio
    }
){
    return (
        <div>
            <div className = "d-flex" style= {{marginBottom:""}}>
                    <h1 >{companyName} </h1>
                    <h1 >: {companyPrice} </h1>
                    <img src={companyLogo} alt="logo" style={{height:"55.99px", marginLeft:"1em"}}></img>
                </div>
            <div className = "d-flex" style={{marginBottom:"3em"}}></div>
            <div style={{width:"50%"}}>
                    <table>
                        <tr>
                            <td><p>Beta: </p></td> <td style={{textAlign:"right"}}><p>{Math.round((companyBeta + Number.EPSILON) * 100) / 100} </p></td>
                        </tr>
                        <tr>
                            <td><p>PE Ratio (TTM): </p></td> <td style={{textAlign:"right"}}><p>{Math.round((companyPERatio + Number.EPSILON) * 100) / 100 } </p></td>
                        </tr>
                    </table>
                </div>
        </div>
    );
}