import { motion } from 'framer-motion'

// Révèle chaque ligne de texte l'une après l'autre, en douceur — utilisé pour
// les grands titres (landing page).
export default function AnimatedText({ lines = [], className = '', lineClassName = '', delay = 0 }) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={lineClassName}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
