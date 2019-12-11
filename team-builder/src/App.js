import React, { useState } from 'react';
import MemberForm from './components/MemberForm';
import Member from './components/Member';
import './App.css';

function App() {

  // Set default values to state
  const [members, setMembers] = useState([
    {
      name: "Kiran Junnarkar",
      email: "Kiran@email.com",
      role: "Full Stack Web Developer"    
    }
  ]);

  // create function to add new members, member is passed from MemberForm.js
  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    // use spread operator to include all current members so far
    // add the newMember object to a new array
    // set state from the new array
    const newMemberArray = [...members, newMember];
    setMembers(newMemberArray);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kiran's Team Members</h1>
      </header>
      <MemberForm addNewMember={addNewMember} />
      <Member members={members} />
    </div>
  );
}

export default App;
