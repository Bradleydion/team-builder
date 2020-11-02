import React from "react";

const Team= (props) => {
    const handleDelete = (id) => {
        props.deleteTeammate(id);
    }


return (
    <div className = "team-list">
        {props.teammates.map((teammate) => (
            <div className ="team" key={teammate.id}>
                <h2>{teammate.name}</h2>
                <h2>{teammate.email}</h2>
                <h2>{teammate.role}</h2>
                <button onClick={()=> handleDelete(teammate.id)}>Delete Teammate</button>
            </div>
        ))}
    </div>
)};
export default Team