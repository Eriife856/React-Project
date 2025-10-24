import {useState} from "react";
function Counter(){
    const [count, setCount] = useState(0);


    return(
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>+1</button>
            <button onClick={()=> count > 0 && setCount(count - 1)}>-1</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter;