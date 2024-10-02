import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display:flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const Logo = styled.span`
  font-family: 'DepartureMono-Regular';
  font-size: 20px;
  color: red;
  cursor: pointer;

  &:hover {
    color:green;
  }
`

export const MyLink = styled(Link)`
    text-decoration: none;
    color: #fff;

    &:hover {
        color: red;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
    color: #fff;
    padding: 1.2em;
`

export const FooterText = styled.p`
    font-size: 12px;
`

export const Main = styled.main`
    flex: 1
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    min-width: 500px;
    flex: 0.5;

    @media only screen and (max-width: 600px) {
        display: none;
        flex-direction: column;
    }
`;

export const MyPage = styled.span`
    @media only screen and (max-width: 600px) {
        position: absolute;
        right: 1%;
    }
`;  