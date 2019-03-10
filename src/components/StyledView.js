import React, { Component } from 'react';
import styled from 'styled-components/native';

const ViewWrapper = styled.View`
  flex: ${props => (props.flex ? props.flex : 1)};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-right: ${props => (props.marginRight ? props.marginRight : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
`;

const StyledView = props => <ViewWrapper {...props} />;

export default StyledView;
