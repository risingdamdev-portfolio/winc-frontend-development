# W5 D1 React deel 33
```
import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => console.log("Changed!")}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
```
