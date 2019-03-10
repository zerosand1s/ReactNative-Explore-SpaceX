import React, { Component } from 'react';
import styled from 'styled-components/native';

const TextWrapper = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 14)}
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')}
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')}
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'none'}
  color: ${props => (props.color ? props.color : '#000000')}
  marginTop: ${props => (props.marginTop ? props.marginTop : '0')}
  marginRight: ${props => (props.marginRight ? props.marginRight : '0')}
  marginBottom: ${props => (props.marginBottom ? props.marginBottom : '0')}
  marginLeft: ${props => (props.marginLeft ? props.marginLeft : '0')}
`;

const StyledText = props => <TextWrapper {...props}>{props.text}</TextWrapper>;

export default StyledText;
