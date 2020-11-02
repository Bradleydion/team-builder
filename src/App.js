import logo from './logo.svg';
import React, {useState} from "react";
import TeamForm from "./Form.js"
import Team from "./Team.js"
import Data from "./data.js"
import './App.css';

function App() {
const [teammates, setTeammates] = useState([Data]);

const deleteTeammate = (id)=>{
  const newTeammate = [...teammates];
  const indexOfTeammateToDelete = newTeammate.findIndex ((teammate)=>teammate.id===id);
  newTeammate.splice(indexOfTeammateToDelete,1);
  setTeammates(newTeammate)
}
const addNewTeammate = (teammates) => {
  const newTeammate = {
    id: Date.now (),
    name: teammates.name,
    email: teammates.email,
    role: teammates.role,
  }
  setTeammates([newTeammate, ...teammates]);
}
  return (
    <div className="App">
    <h1>My Dream Team</h1>
    <TeamForm addNewTeammate ={addNewTeammate}/>
    <Team teammates = {teammates} deleteTeammate = {deleteTeammate}/>
    </div>
  );
}

export default App;
