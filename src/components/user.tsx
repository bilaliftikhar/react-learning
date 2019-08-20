import React from 'react';
import { IUser, IUserProps } from '../interfaces';
import { RedButton } from '../ui/RedButton';
import styled from 'styled-components';

const UserContainer = styled.div`
  display : grid;
  grid: repeat(5,2fr) /repeat(3,2fr);
  grid-gap: 15px 10px;
  justify-content: end;
`;

const UserChild = styled.div`
  background-color: #f1f1f1;
`;

export const User = ({ users } : IUserProps) : JSX.Element => (
  <UserContainer>
    {users.map((user : IUser) : JSX.Element => (
      <UserChild key={user.id}>
         <p>{user.login}</p>
        <img src={user.avatarUrl} alt='Some Faces are missing' height={100}></img>
        <p>{user.reposUrl}</p>
         <p>{user.organizationsUrl}</p>
        <p>{user.receivedEventsUrl}</p>
        <p>{user.starredUrl}</p>
        <p>{user.subscriptionsUrl}</p>
        <RedButton>Click Me</RedButton>
         <hr />
      </UserChild>
    ))
    }
  </UserContainer>
);
