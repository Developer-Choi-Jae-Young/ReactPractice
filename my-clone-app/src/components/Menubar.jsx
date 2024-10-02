import { MyLink, Nav } from "./StyledComponents"

function Menubar() {
    return (
        <Nav>
             <MyLink to='/'>홈</MyLink>
             <MyLink to='/tv'>TV 프로그램</MyLink> 
             <MyLink to='/movie'>영화</MyLink> 
             <MyLink to='/newContent'>최신 콘텐츠</MyLink> 
             <MyLink to='/favorite'>내가 찜한 콘텐츠</MyLink> 
        </Nav>
    )
}

export default Menubar