import React from 'react';
import styled from 'styled-components';
import { ISearchProps } from '../interfaces';
import { Input } from '../ui/Input';

const Sort = styled.label`
   font-weight : bold;
   text-decoration : underline;
   font-family : Arial, Helvetica, sans-serif;
`;

export const Search = ({ searcHandler, sortHandler } : ISearchProps) : JSX.Element =>
  (
    <div>
      <Input onChange={searcHandler} label='Search'  placeholder='Enter text to Search...'/>
      <Sort onClick={sortHandler}>sort</Sort>
    </div>
  );
