import React, { useRef } from "react"

type propsType = { 
    addTodo: (value: string) => void
}
 const AddNewTaskForm: React.FC<propsType> = ({ addTodo }) => {
    // const [inputValue, setInputValue] = useState('');
  
    // const changeHandler = (event:  React.ChangeEvent<HTMLInputElement>) => {        
    //     // setInputValue(ref.current!.value);  
    //     setInputValue(event.target.value);        
    // }

    // const keyPressHandler = (event: React.KeyboardEvent) => { 
    //     if (event.key === 'Enter'){
    //         setList([ref.current!.value,...list])
    //         setInputValue('');
    //     }            
    // }
    // const clickHandler = () => {         
       
    //     setList([inputValue,...list])
    //     setInputValue('');
    // }
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => { 
        if (event.key === 'Enter'){
            addTodo(ref.current!.value);
            ref.current!.value = '';
        }            
    }
    const clickHandler = () => {
        addTodo(ref.current!.value);
        ref.current!.value = '';
    }	
  
    return(
            <div className = "input-holder">
               <input 
                    type = "text"
                    placeholder = "Введите задание"
                    //   value = {inputValue}
                      ref = {ref}
                        // onChange = {changeHandler}                   
                      onKeyPress = {keyPressHandler}
                      />
                <button onClick = {clickHandler}>add ToDo</button>               
            </div>
            )         
}
export default AddNewTaskForm