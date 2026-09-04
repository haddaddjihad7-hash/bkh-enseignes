import SmoothScroll from './components/SmoothScroll.jsx'
import Navbar from './components/Navbar.jsx'
import Landing from './sections/Landing.jsx'
import Process from './sections/Process.jsx'
import ProjectsShowcase from './sections/ProjectsShowcase.jsx'
import ExpertiseMatrix from './sections/ExpertiseMatrix.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <SmoothScroll>
      <div className="bkh-grain" />
      <Navbar />
      <main>
        <Landing />
        <Process />
        <ProjectsShowcase />
        <ExpertiseMatrix />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
