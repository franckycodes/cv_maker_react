import React from "react" 


function Education(prop)
{


    return (<div>

        {/* <p>Total educations: {prop.educationProp.length}</p> */}

        <div> 
            {prop.educationProp.map((res)=>{
                return (<div>
                    <strong>{res.schoolName}</strong>: {res.cursus}

                </div>);
            })}
        </div>
    </div>);
}



export default Education;