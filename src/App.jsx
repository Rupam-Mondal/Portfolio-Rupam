import { Landingpage } from "./Components/Landingpage/Landingpage"
import Routing from "./Routes/Routing"
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Routing/>
    </>
  )
}

export default App
