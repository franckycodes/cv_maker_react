import React from "react" 


function Links(prop)
{
    return (<div>

        {/* <p>Links: {prop.linksProp.length}</p> */}
        <div>
            {prop.linksProp.map((res)=>{
                return <p><a href={res.linkSource} target="_blank">{res.linkText}</a></p>
            }) }
        </div>
    </div>);
}

export default Links;