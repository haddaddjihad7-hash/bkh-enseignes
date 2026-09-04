import { useRef, useState, useEffect } from 'react'
import MediaImage from './MediaImage.jsx'

// Vidéo de fond en boucle automatique (autoplay/muted/playsInline/loop)
// avec un voile sombre très léger pour préserver l'éclat, les couleurs et le contraste des vidéos et images.
export default function BackgroundVideo({
  src,
  fallbackVideo,
  fallbackSrc,
  label,
  overlay = true,
  overlayClassName = '',
  className = '',
}) {
  const videoRef = useRef(null)
  const [currentVideo, setCurrentVideo] = useState(src || fallbackVideo)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setCurrentVideo(src || fallbackVideo)
    setFailed(false)
  }, [src, fallbackVideo])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.defaultMuted = true
      video.muted = true
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented by browser policy; fallback will be visible via poster
        })
      }
    }
  }, [currentVideo])

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => {})
  }

  const handleError = () => {
    if (fallbackVideo && currentVideo !== fallbackVideo) {
      setCurrentVideo(fallbackVideo)
    } else {
      setFailed(true)
    }
  }

  const showVideo = currentVideo && !failed

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {showVideo ? (
        <video
          ref={videoRef}
          src={currentVideo}
          poster={fallbackSrc}
          autoPlay
          muted
          loop
          playsInline
          onEnded={handleEnded}
          onError={handleError}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <MediaImage
          src={fallbackSrc}
          label={label}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-center"
        />
      )}
      {overlay && (
        <div className={`absolute inset-0 pointer-events-none transition-opacity ${overlayClassName || 'bg-noir/30'}`} />
      )}
    </div>
  )
}
