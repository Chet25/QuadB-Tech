import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addElems } from "../redux/todo/todoSlice";

const TaskInput = () => {
	const dispatch = useDispatch();
	// loads all the tasks in list variable
	const list = useSelector((state) => state.todo.value);

	// handles input changes
	const [task, setTask] = useState("");

	const handleChange = (event) => {
		setTask(event.target.value);
	};

	// handles submit event ,i.e, "add todo" button is clikced or enter is pressed
	const handleSubmit = (event) => {
		event.preventDefault();
		// check for empty submits
		if (task) {
			dispatch(addElems(task, list));
		}
		// resets the inout after submittion
		setTask("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input className="todo_input" type="text" value={task} onChange={handleChange} />
				<button className="submit_button" type="submit">
					Add Task
				</button>
			</form>
		</>
	);
};

export default TaskInput;
