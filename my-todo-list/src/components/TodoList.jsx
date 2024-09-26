import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRef } from "react";

const ListContainer = styled.ul`
    width: 100%;
    margin: 12px 0px;
    padding: 0px 30px;
`

const TodoItem = styled.li`
    height: 30px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function TodoList(props) {
    function deleteItem(index) {
        props.deleteItem(index);
    }

    function textDecorate(index) {
        todoItem.current[index].style.setProperty('text-decoration-line', 'line-through');
    }

    const todoItem = useRef([]);

    return (
        <ListContainer>
            {props.list.map((item, index) => 
            <div key={'todo'+index}>
                <TodoItem onClick={() => {textDecorate(index)}} ref={elem => (todoItem.current[index] = elem)}>{item}<FaRegTrashAlt onClick={() => {deleteItem(index)}}/></TodoItem>
            </div>
        )}
        </ListContainer>
    );
}