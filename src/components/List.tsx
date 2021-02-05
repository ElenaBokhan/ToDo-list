import { todoType } from "../types"
import bucket from "../assets/img/bucket.png";

type propsType = {
    setList: (a: any) => void
    list: Array<todoType>
}
export const List: React.FC<propsType> = ({list, setList}) => {
    const removeTodo = (id: number) => {
        // setList((prev: todoType[]) => prev.filter(el=> el.id!==id))
        setList(list.filter(el=> el.id!==id))
    }
    const toggle = (id: number) => {
        const newArray = list.map(el => el.id===id ? {value: el.value, id: el.id, done:!el.done}: el)
        setList(newArray)
    }
    return <div className = "wrapper-tasks">                
                    {list.map(el=> {
                        return <div className = "task" key = {el.id}>
                                    <input  type="checkbox" 
                                            checked = {el.done} 
                                            onChange = {() => toggle(el.id)}                                           
                                            id = {`${el.id}`}/>
                                    <label  htmlFor ={`${el.id}`} >{el.value}</label>
                                    <img src= {bucket} alt="bucket" 
                                        width = "15px"
                                        onClick = {removeTodo.bind(null, el.id)}/>                      
                                </div>                       
                    })}              
            </div>
}

