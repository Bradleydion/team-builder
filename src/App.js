
import React, {useState} from "react";
import TeamForm from "./Form.js"
import Team from "./Team.js"
import Data from "./data.js"
import './App.css';

function App() {
const [teammates, setTeammates] = useState(Data);

const deleteTeammate = (id)=>{
  const newTeammate = [...teammates];
  const indexOfTeammateToDelete = newTeammate.findIndex ((teammate)=>teammate.id===id);
  newTeammate.splice(indexOfTeammateToDelete,1);
  setTeammates(newTeammate)
}

const addNewTeammate = (teammate) => {
  const newTeammates = {
    id: Date.now (),
    name: teammate.name,
    email: teammate.email,
    role: teammate.role,
  }
  setTeammates([newTeammates, ...teammates]);
}
console.log (teammates)
  return (
    <div className="App">
    <h1>My Dream Team</h1>
    <TeamForm addNewTeammate ={addNewTeammate}/>
    <Team teammates = {teammates} deleteTeammate = {deleteTeammate}/>
    </div>
  );
}

export default App;
