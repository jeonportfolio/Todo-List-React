import { useContext, useState } from "react";
import { TodoContext } from "../context";
import { ADD_TODO, SET_FILTER } from "../reducer";
import styled from "@emotion/styled";

function Controls() {
    const { state, dispatch } = useContext(TodoContext);
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        dispatch({ type: ADD_TODO, payload: text })
        setText("");
    }

    const handleChangeFilterType = (e) => {
        dispatch({ type: SET_FILTER, payload: e.target.value })
    }

    return <Control className="controls">
        <Input  
            type="text" 
            className="input" 
            value={text} 
            onChange={handleChange} 
        />
        <Button className="button" onClick={handleSubmit}>추가</Button>
        <Select 
            className="select" 
            value={state.filterType} 
            onChange={handleChangeFilterType}
        >
            <option value="ALL">전체</option>
            <option value="TODO">할 일</option>
            <option value="COMPLETED">완료</option>
        </Select>
    </Control>
}


const Control = styled.div`
     display: flex;
     gap: 6px;
`;
const Input = styled.input`
    flex-grow: 1;
    border: 1px solid gray;
    border-radius: 6px;
    background-color: transparent;
    padding: 4px 12px;
    font-size: 16px;
    line-height: 20px;
    color: white;
`;
const Button = styled.button`
     border: 1px solid gray;
    border-radius: 6px;
    background-color: #000;
    font-size: 16px;
    padding: 0 16px;
    color: white;
    flex-shrink: 0;
`;
const Select = styled.select`
     border: 1px solid gray;
    border-radius: 6px;
    background-color: #000;
    font-size: 16px;
    padding: 0 16px;
    color: white;
    flex-shrink: 0;
`;


export default Controls;