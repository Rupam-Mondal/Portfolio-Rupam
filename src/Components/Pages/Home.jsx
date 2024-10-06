import About from "../About/About"
import { Landingpage } from "../Landingpage/Landingpage"
import Projects from "../Projects/Project"

function Home(){
    return (
        <>
            <Landingpage />
            <About />
            <Projects/>
        </>
    )
}

export default Home