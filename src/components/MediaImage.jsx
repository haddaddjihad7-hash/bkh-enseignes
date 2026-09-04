import { useState, useEffect } from 'react'

export default function MediaImage({ src, fallbackSrc, label, className = '', imgClassName = '' }) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc)
    setFailed(false)
  }, [src, fallbackSrc])

  const handleError = () => {
    if (currentSrc === src && fallbackSrc && src !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    } else {
      setFailed(true)
    }
  }

  if (!currentSrc || failed) {
    return <div className={`media-placeholder overflow-hidden ${className}`} data-label={label} />
  }

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <img
        src={currentSrc}
        alt={label || 'BKH Enseignes'}
        className={`h-full w-full object-cover object-center transition-transform duration-500 ${imgClassName}`}
        onError={handleError}
        loading="lazy"
      />
    </div>
  )
}
