import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const QuantityBox = () => {
    const [inputVal, setInputVal] = useState(1);

    const minus=()=>{
        if(inputVal !==1)
        setInputVal(inputVal-1);
    }

    const plus=()=>{
        setInputVal(inputVal+1);
    }
    return (
        <div className="quantityDrop d-flex align-item-center">
            <Button onClick={plus}><FaPlus /></Button>
            <input type="text" value={inputVal} />
            <Button onClick={minus}><FaMinus /></Button>
        </div>
    )
}

export default QuantityBox;