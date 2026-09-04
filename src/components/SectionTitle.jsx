import { motion } from 'framer-motion'

export default function SectionTitle({ kicker, title, sub, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 ${
            light ? 'text-white/70' : 'text-electrique-soft'
          }`}
        >
          <span className={`h-px w-7 ${light ? 'bg-white/50' : 'bg-electrique-soft'}`} />
          {kicker}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(28px,4vw,46px)] font-semibold leading-[1.1] tracking-tight text-blanc"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-xl text-[15.5px] font-light text-gris-clair"
        >
          {sub}
        </motion.p>
      )}
    </div>
  )
}
