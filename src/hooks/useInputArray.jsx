import {useState, useCallback} from "react"

export const useInputArray = ()=>{
    const [array, setArray] = useState([]);
    const [text, setText] = useState("");


    const handleInput = useCallback((e)=>{
        setText(e.target.value)
    }, []);

    const handleAdd = useCallback(()=>{
        setArray((prevArray)=>{
            const newArray = [...prevArray, text];
            return newArray;
        });
    }, [text]);

    return {array, text, handleInput, handleAdd}
}