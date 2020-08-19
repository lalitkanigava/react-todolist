import React, { useState } from "react";
import Lists from "./components/Lists";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./App.css";

function App() {
	let [inputdata, getValue] = useState([]);
	function setValue(event) {
		inputdata = event.target.value;
		getValue(...inputdata);
	}

	return (
		<>
			<div className="container">
				<div className="hero">
					<h1 className="heading">ToDoList</h1>
					<div className="input-div">
						<InputGroup className="mb-3">
							<FormControl
								className="w-25"
								placeholder="Enter task"
								type="text"
								onChange={setValue}
							/>
						</InputGroup>
						<Button className="button" variant="success">
							+
						</Button>
					</div>
					<hr></hr>

					<div>
						<Lists />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
