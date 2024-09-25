import { useState, useEffect } from 'react';

function Clicker() {
    const [count, setCount] = useState(0);
    //const [상태명, 상태변경시사용할함수명] = useState(초기값)
  
    useEffect(() => {
      document.title = '클릭횟수' + count;
    });
    // => 랜더링될 때마다 실행
  
    return (
        <div>
            <p>클릭 횟수: {count}</p>
            <button onClick={() => {setCount(count + 1)}}>클릭</button>
        </div>
      );
}

export default Clicker;