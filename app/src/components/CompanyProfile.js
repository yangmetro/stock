export default function CompanyProfile(
    {
        companyName,
        companyPrice,
    }
){
    return (
        <div>
            <h5 style= {{marginBottom:"1em"}}>{companyName} Price </h5>
            <h5>{companyPrice}</h5>
            <div className = "d-flex" style={{marginBottom:"3em"}}></div>
        </div>
    );
}