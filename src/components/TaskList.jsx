import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeElems, toggleElem } from "../redux/todo/todoSlice";

function TaskList() {
	const dispatch = useDispatch();
	// load all the todo list elemnets
	const list = useSelector((state) => state.todo.value);
	//console.log(list);
	return (
		<>
			{/* map through the list array */}
			{/* todo list */}
			{list.map((elem, index) => {
				return (
					<div key={index} className="list_element">
						{/* todo checkbox */}
						{elem.done ? (
							<input
								className="todo_checkbox"
								type="checkbox"
								onChange={() => {
									dispatch(toggleElem(index, list));
								}}
								checked
							/>
						) : (
							<input
								className="todo_checkbox"
								type="checkbox"
								onChange={() => {
									dispatch(toggleElem(index, list));
								}}
							/>
						)}

						{/* todo text */}
						<div className="list_text">
							<p
								className=""
								key={index}
								style={{
									textDecoration: elem.done
										? "line-through"
										: "none",
								}}
							>
								{elem.text}
							</p>
						</div>
						{/* delete button  */}

						<button
							className="delete_button"
							onClick={() => {
								dispatch(removeElems(index, list));
							}}
						>
							<i className="bi bi-trash3-fill"></i>
						</button>
					</div>
				);
			})}
		</>
	);
}

export default TaskList;
