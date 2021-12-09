import React from "react"


function Language(prop)
{




    return (<div>
        
        {/* <p>Languages: {prop.languageProp.length}</p> */}
    <div> 
        {prop.languageProp.map((res)=>{
            return <p>{res.language}</p>
        })}
    </div>
    </div>);
}




export default Language;