import { useState } from "react";
import { test1, test2, test3, test4 } from "../services/testApi";

function Practice1() {
    const [data, setData] = useState('');
    const changeData = async () => {
        /*
        const data = test1();
        setData(data);
        */

        /*      // Promise 객체를 전달받아 처리
        test2().then(result => {
            setData(result.msg);
        });
        */

        /*      // async/await 사용
        const data = await test3();
        setData(data.msg);
        */
        
        const data = await test4();
        if(data.status === 200) {
            setData(data.data.msg);
        }
    }

    return (
        <>
            <h3>연습용 페이지</h3>
            <br />
            <button onClick={changeData}>테스트</button>
            <br />
            <textarea cols={30} rows={10} readOnly value={data}></textarea>
        </>
    );
}

export default Practice1;