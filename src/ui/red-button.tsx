import styled from 'styled-components';

export const RedButton = styled.button`
  align-items: center;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px, rgba(235, 87, 87, 0.3) 0px 0px 0px 1px inset;
  border-radius: 3px;
  background: rgba(235, 87, 87, 0.06);
  cursor: pointer;
  color: rgb(235, 87, 87);
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  justify-content: center;
  line-height: 1;
  margin-bottom: 12px;
  margin-top: 6px;
  padding-left: 12px;
  padding-right: 12px;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  &:hover {
      background-color : rgba(235, 87, 87, 0.12);
    }
`;
