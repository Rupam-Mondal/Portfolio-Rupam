import About from "../About/About"
import { Landingpage } from "../Landingpage/Landingpage"
import Projects from "../Projects/Project"

function Home(){
    return (
        <>
            <Landingpage />
            <Projects/>
            <About/>
        </>
    )
}

export default Home