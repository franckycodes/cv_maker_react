import React from "react"


function AboutUser(prop)
{
    const about=prop.aboutUserProp;
    return (<div>
        <p><strong>{about.userName}</strong>({about.work})</p>
        <p>{about.phone}</p>
        <p><a href={"mailto:"+about.email}>{about.email}</a></p>
        <p>{about.address}</p>
    </div>);
}

export default AboutUser;