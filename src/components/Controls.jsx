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

    return <div className="flex gap-[6px] h-[30px]">
        <input  
            className= {inputClassName}
            type="text" 
            value={text} 
            onChange={handleChange} 
        />
        <button className={commonclassName} onClick={handleSubmit}>추가</button>
        <select 
            className={commonclassName}
            value={state.filterType} 
            onChange={handleChangeFilterType}
        >
            <option value="ALL">전체</option>
            <option value="TODO">할 일</option>
            <option value="COMPLETED">완료</option>
        </select>
    </div>
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

const inputClassName = `
    grow border-[1px] border-solid rounded-[100px] bg-transparent
    px-[12px] py-[4px] text-[16] leading-[20px] text-white
`;

const commonclassName = `
    border-[1px] border-solid border-gray-100 rounded-[6px] bg-black
    bg-transparent px-[12px] py-[0px] text-white
    shrink
`


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