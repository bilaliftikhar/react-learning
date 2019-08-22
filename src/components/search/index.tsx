import React, { ReactElement } from 'react';
import { ISearchProps } from '../../interfaces';
import { Sort, Styled } from './styled';
import { Input } from '../../ui/input';


export const Search = ({ searcHandler, sortHandler } : ISearchProps) : ReactElement => (
  <Styled>
    <Input
      onChange={searcHandler}
      label='Search'
      placeholder='Enter text to Search...'
    />
    <Sort onClick={sortHandler}>sort</Sort>
  </Styled>
);
