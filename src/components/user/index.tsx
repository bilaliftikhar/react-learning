import React, { ReactNode, ReactElement } from 'react';
import { IUser, IUserProps } from '../../interfaces';
import { Styled, StyledUser, StyledParagraph, StyledHr, StyledImg } from './styled';
import { RedButton } from '../../ui/red-button';


export const User = ({ users } : IUserProps) : ReactElement => (
  <Styled>
    {
      users.map((user : IUser) : ReactNode => (
        <StyledUser key={user.id}>
          <StyledParagraph>{user.login}</StyledParagraph>
          <StyledImg src={user.avatarUrl} alt='Some Faces are missing' height={100}></StyledImg>
          <StyledParagraph>{user.reposUrl}</StyledParagraph>
          <StyledParagraph>{user.organizationsUrl}</StyledParagraph>
          <StyledParagraph>{user.receivedEventsUrl}</StyledParagraph>
          <StyledParagraph>{user.starredUrl}</StyledParagraph>
          <StyledParagraph>{user.subscriptionsUrl}</StyledParagraph>
          <RedButton>Click Me</RedButton>
          <StyledHr />
        </StyledUser>
      ))
    }
  </Styled>
);
