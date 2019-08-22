import React, { PureComponent, ReactNode } from 'react';
import { IInput } from '../interfaces';
import styled from 'styled-components';

const Label = styled('div')`
  color: rgba(55, 53, 47, 0.6);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
const InputContainer = styled('div')`
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
  border-radius: 3px;
  background: rgba(242, 241, 238, 0.6);
  cursor: text;
  font-size: 15px;
  line-height: 26px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left : 10px;
  position: relative;
  padding: 4px 10px;
`;
const InputWithoutBorder = styled('input')`
  background: none;
  border: none;
  display: block;
  font-size: inherit;
  line-height: inherit;
  padding: 0px;
  resize: none;
  width: 100%;
  &::placeholder {
    color:#a5a3af;
    font-weight: 300;
    }
`;
const MainInputContainer = styled.div`
  align-items : baseline;
  display : flex;
`;
export class Input extends PureComponent<IInput> {
  render () : ReactNode {
    const { label, ...inputProps } = this.props;
    return (
      <MainInputContainer>
        <Label>{label}</Label>
        <InputContainer>
          <InputWithoutBorder {...inputProps as any} />
        </InputContainer>
      </MainInputContainer>
    );
  }
}
