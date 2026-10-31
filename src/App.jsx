import { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Players from "./Components/Players";

const fetchPlayer = async()=>{
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  return <>
  <Navbar/>
  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
  <Players playersPromise={playersPromise}/>
  </Suspense>
  </>;
}

export default App;
