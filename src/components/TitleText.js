import React, { Component } from 'react';
import styled from 'styled-components/native';

const TextWrapper = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 28)}
  font-weight: bold
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')}
  text-transform: uppercase
  color: ${props => props.color}
`;

const TitleText = props => <TextWrapper {...props}>{props.text}</TextWrapper>;

export default TitleText;
