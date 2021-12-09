import React, {useState} from "react"

function AllSkills(prop)
{
    const [state, setState]=useState("");

    return (<div><div className="allSkills">
        {/* <p>Total skills: {prop.skillsProp.length}</p> */}
    {prop.skillsProp.map((res)=>{

        return <div className="skillsContainer">
            <div className="skillsText">{res.skillsName}</div>
            <div className="skillsLevelContainer">
                <div className="skillsLevel"  style={{width: res.skillsLevel+'%'}}></div>
            </div>
        </div>
    })}
 </div></div>);
}


export default AllSkills;