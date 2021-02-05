import './App.css';
import React, { useEffect } from "react";
import { useState } from "react";
import { List } from "./components/List";
import Input from './components/addNewTaskForm';
import { todoType } from './types';

const App: React.FC = () => {	

	const [list, setList] = useState<Array<todoType>>([]);
	
	const addTodo = (value: string ) => {
        const toDo = {
            value: value,
            id: Date.now(),
            done: false
        }  
        setList(prev => [toDo,...prev]);
        localStorage.setItem(`${toDo.id}`, JSON.stringify(toDo));       	
    }
	useEffect(()=>{
		const saved =  JSON.parse(localStorage.getItem('list') || '[]')
		setList(saved)
	},[])
	return 	<div className = "container">
				<header>
					<div></div>
					<div></div>
				</header>
				<main>
					<Input addTodo = {addTodo}  />						
					<List setList = {setList} list = {list} />											
				</main>
				<footer></footer>					
			</div>		

}

export default App