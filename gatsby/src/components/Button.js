import styled from 'styled-components';
import Colors from '../Colors';
import { lighten, darken } from 'polished';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${props => props.theme.bg};
  color: ${props => (props.theme === 'white' ? `${Colors.blue};` : `${Colors.blue};`)};
  line-height: 1.05;
  font-size: 16px;
  font-weight: bold;
  padding: ${props => (props.large ? '16px 34px;' : '12px 30px;')}
  border: 1px solid ${props => (props.theme === 'white' ? `${Colors.white};` : `${Colors.dark};`)};
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  ${props => props.book && 'margin-left: 15px;'}
  transition-duration: 0.3s;
  &:hover {
    color: ${props => (props.theme === 'white' ? `${lighten(0.2, Colors.white)};` : `${darken(0.1, Colors.white)};`)};
    text-decoration: none;
    background: ${props => (props.theme === 'white' ? `${lighten(0.1, Colors.blue)};` : `${'transparent'};`)};
    border: 1px solid ${props =>
      props.theme === 'white' ? `${lighten(0.3, Colors.blue)};` : `${darken(0.1, Colors.dark)};`};
  }
`;

export const HireMe = styled.div`
  line-height: 1.05;
  font-size: ${props => (props.large ? '18px' : '16px')};
  padding: ${props => (props.large ? '16px 50px' : '12px 30px')};
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background: ${Colors.green};
  color: ${Colors.white};
  font-weight: bold;
  border: 1px solid ${Colors.green};
  transition-duration: 0.3s;
  &:hover {
    color: ${Colors.green};
    background: ${Colors.white};
  }
`;

export const LinkButton = styled(Button)`
  font-size: 0.9;
  border: none;
  text-decoration: underline;
  transition-duration: 0.3s;
  &:hover {
    border: none;
    text-decoration: none;
  }
`;
