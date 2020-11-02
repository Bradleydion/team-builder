import React, {useState} from "react"

const TeamForm = (props) =>{
    const [teammate, setTeammate] = useState ({name:"", email:"",role:""});
    
    const handleChanges = (event)=> {
        setTeammate({...teammate, [event.target.name]: event.target.value});
    }
;

const submitForm = (event) => {
    event.preventDefault();
    props.addNewTeammate(teammate);
    setTeammate({name:"",email:"",role:""})
};

return(
    <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
            id="name"
            name="name"
            type="text"
            placeholder="First and Last Name"
            onChange={handleChanges}
            value={teammate.name}
            required
            />
            <label htmlFor="email">Email</label>
            <input
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
            onChange={handleChanges}
            value={teammate.email}
            required
            />
              <label htmlFor="role">Role</label>
            <input
            id="role"
            name="role"
            type="text"
            placeholder="Position"
            onChange={handleChanges}
            value={teammate.role}
            required
            />
            <button type="submit">Add Teammate</button>
    </form>
)}
export default TeamForm