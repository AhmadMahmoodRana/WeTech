import Header from '../components/Header'
import ThirdSection from '../components/ThirdSection'
import ProgramSelection from '../components/ProgramSelection'
import ImmersiveProgram from '../components/ImmersiveProgram'
import Team from '../components/Team'
import OurGradeStudent from '../components/OurGradeStudent'
// import TrendingTechnology from '../components/TrendingTechnology'
import FreeBootcamp from '../components/FreeBootcamp'
import Blog from '../components/Blog'

const Home = () => {


    return (
        <div>
            

            <Header />
            <ThirdSection />
            <ImmersiveProgram />
            <ProgramSelection />
            <Team />
            <OurGradeStudent />
            <FreeBootcamp />
            <Blog/>
            {/* <TrendingTechnology /> */}
        </div>
    )
}

export default Home
