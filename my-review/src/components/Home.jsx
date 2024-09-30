import { useContext, useState } from "react";
import { ResultContext } from "../App";

function Home() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(ResultContext);

    const login = () => {
        ctx.setData({id: user, pwd: password});
    }

    const logout = () => {
        ctx.setData({id: '', pwd: ''});
    }

    return (
        <>
        { ctx.data.id === '' ?
            (
            <>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="아이디"/> <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"/> <br />
            <button onClick={login}>로그인</button>
            </>) :
            <>
            {ctx.data.id}님 반갑습니다. <br />
            <button onClick={logout}>로그아웃</button>
            </>
        }
        </>
    );
}

export default Home;