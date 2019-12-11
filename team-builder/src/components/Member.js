import React from 'react';
import styled from 'styled-components';

// styled-components
const Card = styled.div `
  border: solid black 2px;
  margin: 50px 250px 50px 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Name = styled.h1 `
  color: yellow;
  font-weight: bold;
`;

const Info = styled.ul `
  list-style-type: none;
`;

const ListItems = styled.li `
  color: white;
`;

const Member = (props) => {
    return (
        <div> 
            {props.members.map(member => (
                <Card>
                    <Name>Name: {member.name}</Name>
                    <Info>
                        <ListItems>Email: {member.email}</ListItems>
                        <ListItems>Role: {member.role}</ListItems>
                    </Info>
                </Card>
            ))}
        </div>
    );
};

export default Member; 
