import React, { PureComponent, ReactNode } from 'react';
import { IInput } from '../interfaces';
import styled from 'styled-components';

const Label = styled('div')`
    /* display: flex; */
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(55, 53, 47, 0.6);
    font-weight: 500;
`;
const InputContainer = styled('div')`
    /* display: flex; */
    /* align-items: center; */
    /* width: 20%; */
    font-size: 15px;
    line-height: 26px;
    padding: 4px 10px;
    position: relative;
    border-radius: 3px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
    background: rgba(242, 241, 238, 0.6);
    cursor: text;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left : 10px;
`;
const InputWithoutBorder = styled('input')`
    font-size: inherit;
    line-height: inherit;
    border: none;
    background: none;
    width: 100%;
    display: block;
    resize: none;
    padding: 0px;
    &::placeholder {
        color:#a5a3af;
        font-weight: 300;
    }
`;
const MainInputContainer = styled.div`
    display : flex;
    align-items : baseline;
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
