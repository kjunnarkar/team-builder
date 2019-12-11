import React, { useState } from 'react';

const MemberForm = ({addNewMember}) => {
    // set state for the form
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    // set onChange handler
    // controlled input --> computed properties to dynamically update state
    // spread the state in member and override key:value with new value
    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value });
    };

    // submit handler fires when type="submit" button is clicked
    // preventDefault to prevent rerender from clicking button
    // execute addNewMember function from App
    // clear form state after button click
    const formSubmit = event => {
        event.preventDefault();
        addNewMember(member);
        setMember({name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
                value={member.name}
            />
            <label htmlFor="email">Email: </label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
                value={member.email}
            />
            <label htmlFor="role">Role: </label>
            <input
                id="role"
                type="text"
                name="role"
                placeholder="Enter Position"
                onChange={handleChange}
                value={member.role}
            />
            <button type="submit">Submit Info</button>
        </form>
    )
}
export default MemberForm;
