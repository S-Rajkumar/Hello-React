import React, {useState, useEffect} from 'react';

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {    
        //This onnly execute if count value changes due to count dependency.
        console.log("count value changed");
        if(count === 3){
            document.getElementById("useEffectClickButton").innerText = "Click Me";
        }
    }, [count]);

    return (
        <div>
            <h1>useEffect</h1>
            <p><button id = "useEffectClickButton" onClick={() => {count === 3 ? setCount(count) : setCount(count + 1)}}>Change Count</button> Count : {count}</p>
            <br />
        </div>
    );
}

const UseEffectExample = () => {
    const [items, updateItems] = useState([]);
    const [clearFlag, setClearFlag] = useState(false);

    useEffect(() => {
        console.log("clearFlag value changed");
        updateItems([]);
    }, [clearFlag]);

    const clearView = () => {
        clearFlag ? setClearFlag(false) : setClearFlag(true);
    }

    const pushItem = () => {
        let tempitems = items.slice();
        tempitems.push("-> item ");
        updateItems(tempitems);
    }

    const popItem = () => {
        let tempitems = items.slice();
        tempitems.pop();
        updateItems(tempitems);
    }

    return (
        <div>
            <button onClick = {pushItem}>Add Item</button>
            <button onClick = {popItem}>Pop Items</button>
            <button onClick = {clearView}>Clear Items</button>
            <h3>{items}</h3>
        </div>
    )
}

export {UseEffectDemo, UseEffectExample};