import styled from "styled-components";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";

const InsertInput = styled.input`
    border: none;
    border-radius: 50px 0px 0px  50px;
    background-color: lightblue;
    box-sizing: border-box;
    height: 40px;
    min-width: 250px;
    padding: 20px;
`

const InsertBtn = styled.button`
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 0px 50px 50px 0px;
    cursor: pointer; 
    background-color: black;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InsertContainer = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`

const InsertItem = (props) => {
    const [todoItem, setTodoItem] = useState('');

    const addTodo = () => {
        props.addItem(todoItem);
        setTodoItem('');
    }

    return (
        <InsertContainer>
            <InsertInput value={todoItem} placeholder="할일 입력" onChange={(e) => {setTodoItem(e.target.value);}}></InsertInput>
            <InsertBtn onClick={addTodo}>
                <IoAddCircleOutline />
            </InsertBtn>
        </InsertContainer>
    );
}

export default InsertItem;