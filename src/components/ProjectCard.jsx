import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import BeforeAfter from './BeforeAfter.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ProjectCard({ project, index }) {
  const { tr, t } = useLanguage()

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group overflow-hidden rounded-lg border border-white/8 bg-white/[0.02] shadow-[0_16px_34px_-22px_rgba(0,0,0,0.6)] transition-shadow duration-500 hover:shadow-[0_26px_52px_-24px_rgba(0,0,0,0.7),0_0_40px_-18px_rgba(59,130,246,0.25)]"
    >
      <div className="relative aspect-[4/3]">
        <BeforeAfter before={project.before} after={project.after} label={tr(project.title)} className="h-full w-full" />
        <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-noir/55 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gris-clair backdrop-blur-md">
          {tr(project.category)}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-[17px] font-semibold text-blanc">{tr(project.title)}</h3>
        <button className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-electrique-soft transition-all group-hover:gap-2.5 group-hover:text-blanc">
          {t('projects.viewProject')}
          <ArrowUpRight size={15} />
        </button>
      </div>
    </motion.article>
  )
}
