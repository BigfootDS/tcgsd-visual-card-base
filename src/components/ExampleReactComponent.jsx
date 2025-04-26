import { useEffect, useState } from "react";


export default function ExampleReactComponent(){

	let [count, setCount] = useState(0);

	useEffect(() => {
		console.log("React component running!");
	}, []);

	return(
		<>
			<button onClick={() => setCount((previousCount) => previousCount + 1)} >
				Count is {count}
			</button>
		</>
	);
}