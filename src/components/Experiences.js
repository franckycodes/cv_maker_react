import React, {useState} from "react"

function Experiences(prop) 
{
    const [state,setState]=useState("");

    return (<div>

        <p>Total experiences: {prop.xpProp.length}</p>


        {prop.xpProp.map((res)=>{

// const startDate=new Date(res.startDate);
// const endDate=new Date(res.endDate);
return (<div> 
            <p><strong>{res.companyName}:({res.workPosition})</strong><br/> 
            {/* Debut: {startDate.getDay()+"/"+startDate.getMonth()+"/"+startDate.getFullYear()}<br/> 
            Fin: {endDate.getDay()+"/"+endDate.getMonth()+"/"+endDate.getFullYear()}<br/> */}
            Start: {res.startDate} - {res.endDate}<br/></p>
        </div>)
        })}
    </div>);
}

export default Experiences;