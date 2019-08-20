import React from 'react';
import styled from 'styled-components';

const Load = styled.span`
  font-size : 20px;
  color : rgba(86, 137, 204, 1);
  font-family : Arial, Helvetica, sans-serif;
`;

export const Loading = () : JSX.Element => <Load>Loading...</Load>;
