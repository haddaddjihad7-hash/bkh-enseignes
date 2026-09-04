import SectionTitle from '../components/SectionTitle.jsx'
import Container from '../components/Container.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="realisations" className="bg-noir py-20 md:py-28">
      <Container>
        <SectionTitle kicker={t('projects.kicker')} title={t('projects.title')} sub={t('projects.sub')} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
