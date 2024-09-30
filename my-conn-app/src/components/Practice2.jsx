import { useState } from "react";
import { test5 } from "../services/testApi";

function Practice2() {
    const [list, setList] = useState([]);

    const testClick = async () => {
        const result = await test5();
        setList(result.data.msg);
    }

    return (
        <>
            <button onClick={testClick}>테스트</button>

            <table style={{margin: 'auto', border: '1px solid'}}>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>직업</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map((item, key) => {  
                            return (<tr key={key}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.job}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Practice2;