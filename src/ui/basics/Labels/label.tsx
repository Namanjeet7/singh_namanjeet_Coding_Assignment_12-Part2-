import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './label.types';


const StyledLabel = styled.label<LabelProps>`
  font-size: 16px;
  color: ${props => (props.disabled ? 'grey' : 'black')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};

export default Label;
