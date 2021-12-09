import React from "react"


function Personality (prop)
{


    return (<div><p>Personnalites: {prop.personalitiesProp.length}</p>
    
    <div> 
        {prop.personalitiesProp.map((res)=>{
            return (<div>{res.personality}</div>);
        })
        }
    </div>
    </div>);
}

export default Personality;