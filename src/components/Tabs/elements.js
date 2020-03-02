import styled from 'styled-components';

export const TabsList = styled.ul`
  
`
export const TabsItem = styled.h1`
  
  display: inline-block;
  cursor: pointer;
  margin-right: 72px;
  &:last-child {
    margin-right: 0;
  }
  font-size: 48px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 48px;
  
  color: ${props => (
    props.active 
    ? 'rgba(20, 16, 41, 0.8)' 
    : 'rgba(20, 16, 41, 0.24)'
  )};
`