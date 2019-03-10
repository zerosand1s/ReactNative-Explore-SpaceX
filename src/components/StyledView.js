import React, { Component } from "react";
import styled from "styled-components/native";

const ViewWrapper = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
  padding: ${props => props.padding};
  backgroundColor: ${props => props.backgroundColor};
`;

const StyledView = (props) => (
  <ViewWrapper {...props} />
);

export default StyledView;
