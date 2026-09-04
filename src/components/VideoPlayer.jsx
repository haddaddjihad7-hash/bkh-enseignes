import { useRef, useState } from 'react'

export default function VideoPlayer({ src, label, className = '' }) {
  const videoRef = useRef(null)
  const [failed, setFailed] = useState(false)

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => {})
  }

  if (!src || failed) {
    return <div className={`media-placeholder rounded-lg overflow-hidden ${className}`} data-label={label} />
  }

  return (
    <div className={`overflow-hidden rounded-lg relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onEnded={handleEnded}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}
