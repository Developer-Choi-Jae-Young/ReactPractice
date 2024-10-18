import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FooterText, Header, Logo, Main, MainContainer, MyHamburger, MyPage } from './components/StyledComponents';
import Menubar from './components/Menubar';

import './App.css';
import './css/font.css';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header>
          {/* 로고 | 메뉴 | 마이페이지 */}
          <Logo>NETFLIX</Logo>
          <Menubar />
          <MyPage>MyPage</MyPage>
          <MyHamburger>☰</MyHamburger>
        </Header>
        <Main>
          {/* 메인 컨텐트 영역 */}
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/tv' element={<>tv</>} />
          </Routes>
        </Main>
        <footer>
          {/* 회사 정보 | 연락처 ... */}
          <h3>넷플릭스 대한민국</h3>
          <FooterText>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</FooterText>
          <FooterText>대표: 레지널드 숀 톰프슨</FooterText>
          <FooterText>이메일 주소: korea@netflix.com</FooterText>
          <FooterText>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</FooterText>
          <FooterText>사업자등록번호: 165-87-00119</FooterText>
          <FooterText>클라우드 호스팅: Amazon Web Services Inc.</FooterText>
          <FooterText>공정거래위원회 웹사이트</FooterText>
        </footer>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
