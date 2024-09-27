import { useRef, useState } from 'react';

const taStyle = {
    resize: 'none', 
    minHeight: '75%',
    minWidth: '60%'
}

function LetterCount() {
    const [letter, setLetter] = useState('');
    const [letterCnt, setLetterCnt] = useState(0);
    const [blankLetterCnt, setBlankLetterCnt] = useState(0);

    const logic = (e) => {
        setLetterCnt(e.target.value.length);
        setLetter(e.target.value);
        setBlankLetterCnt(e.target.value.replaceAll(' ', '').length);
    }

    const reset = () => {
        setLetterCnt(0);
        setLetter('');
        setBlankLetterCnt(0);

        textRef.current.focus();
    }

    const textRef = useRef();

    return (
        <>
            <textarea ref={textRef} style={taStyle} value={letter} onChange={logic}>
            </textarea>
            <hr></hr>

            <p>공백 포함 {letterCnt} 자</p>
            <p>공백 제외 {blankLetterCnt} 자</p>

            <hr></hr>

            <button onClick={reset}>초기화</button>
        </>
    );
}

export default LetterCount;