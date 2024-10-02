import { useEffect, useState } from "react";

function WaitList() {
    const [list, setList] = useState([{ name: '아이유', headCnt: 10, tel: '010-1010-1010' }, { name: '차은우', headCnt: 5, tel: '010-3030-3030' }, { name: '카리나', headCnt: 3, tel: '010-7070-7070' }]);
    const [name, setName] = useState('');
    const [headCnt, setHeadCnt] = useState('');
    const [tel, setTel] = useState('');

    useEffect(() => {
        console.log("**************************");
        console.log(list);
        console.log("**************************");
    }, [list])

    const insertData = () => {
        setList([...list, {name: name, headCnt: headCnt, tel: tel}]);
    }

    const myInput = {
        borderRadius: '10px'
    }

    const colorRed = {
        color: 'red'
    }

    const colorOrange = {
        color: 'orange'
    }
    
    return (
        <div align="center">
            <h1>엘식당 대기 명단 표</h1>
            <table border="1">
                <thead style={{ backgroundColor: 'lightgrey' }}>
                    <tr>
                        <th>이름</th>
                        <th>인원 수</th>
                        <th>연락처</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td style={{color: item.headCnt > 5 ? 'red' : item.headCnt > 3 ? 'orange' : 'black'}}>{item.headCnt}</td>
                                    <td>{item.tel === '' ? '' : '♥' + item.tel}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr />
            <h1>새 대기자 추가</h1>
            <input style={myInput} type="text" placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)}/>
            <input style={myInput} type="number" placeholder="인원수 입력" value={headCnt} onChange={(e) => setHeadCnt(e.target.value)}/>
            <input style={myInput} type="tel" placeholder="연락처 입력" value={tel} onChange={(e) => setTel(e.target.value)}/>
            <button onClick={insertData}>등록</button>
        </div>
    )
}

export default WaitList;