import React , {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import HogForm from "./HogForm";

import hogs from "../porkers_data";

function App() {
	const [hogsData, setHogsData] = useState(hogs);

	return (
		<div className="App">
			<Nav />
			<Filter setHogs={setHogsData} hogs={hogsData} />
      <HogList hogs={hogsData} />
      <HogForm setHogs={setHogsData} />	
		</div>
	);
}

export default App;
