import React, { useState } from "react";
import "./App.css";

let getTime = "00:00:00";

function App() {
	let [time, updateTime] = useState(getTime);

	function currentTime() {
		let time = new Date().toLocaleTimeString();

		updateTime(time);
	}
	let temp = setInterval(currentTime, 1000);

	function resetTime() {
		clearInterval(temp);
		time = "00:00:00";

		updateTime(time);
	}

	return (
		<div className="container">
			<div className="hero">
				<h1 className="time">{time}</h1>
				<div className="buttons">
					{/* <button className="start" onClick={startTime}>
						Start Time
					</button>
					<button className="reset" onClick={resetTime}>
						Reset
					</button> */}
				</div>
			</div>
		</div>
	);
}

export default App;
