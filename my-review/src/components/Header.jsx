import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
const CustomLink = styled(Link)`
    background-color: RGB(75, 129, 177);
    color: white;
    border: 1px RGB(75, 129, 177);
    text-decoration: none;
    margin: 10px;
    padding: 10px;
`;
    return( 
        <>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='/timer'>타이머</CustomLink>
            <CustomLink to='/letter'>글자 수 세기</CustomLink>
            <CustomLink to='/stopwatch'>스탑와치</CustomLink>
            <CustomLink to='/waitlist'>대기명단</CustomLink>
        </>
    );
}

export default Header;