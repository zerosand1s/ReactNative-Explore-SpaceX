import React, {Component} from 'react';
import { ListItem, Icon } from 'react-native-elements';
import styled from 'styled-components/native';

const IconWrapper = styled(Icon)`
  name: ${ props => props.name }
  color: ${ props => props.color }
`

const StyledIcon = ({ name, color }) => (
  <IconWrapper
    name={ name }
    reverse={ true }
    raised={ true }
    color={ color }
  >
  </IconWrapper>
);

export default StyledIcon;