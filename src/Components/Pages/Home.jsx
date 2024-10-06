import About from "../About/About"
import { Landingpage } from "../Landingpage/Landingpage"
import Projects from "../Projects/Project"
import Skills from "../Skills/Skills"

function Home(){
    return (
        <>
            <Landingpage />
            <About />
            <Projects/>
            <Skills/>
        </>
    )
}

export default Home