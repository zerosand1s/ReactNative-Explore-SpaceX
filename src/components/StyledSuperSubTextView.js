import React, { Component } from 'react';
import styled from 'styled-components/native';

const ViewWrapper = styled.View`
  flex: 0.4;
  marginVertical: 2%
  backgroundColor: ${props => props.backgroundColor};
  borderRadius: 8
  justifyContent: center;
`;

const SuperTextWrapper = styled.Text`
  fontSize: 28
  fontWeight: bold
  textAlign: center
  textTransform: uppercase
  color: ${props => props.color}
`;

const SubTextWrapper = styled.Text`
  fontSize: 10
  fontWeight: bold
  textAlign: center
  textTransform: uppercase
  color: ${props => props.color}
`;

const StyledTitleView = props => (
  <ViewWrapper {...props}>
    <SuperTextWrapper {...props}>{props.superText}</SuperTextWrapper>
    <SubTextWrapper {...props}>{props.subText}</SubTextWrapper>
  </ViewWrapper>
);

export default StyledTitleView;
