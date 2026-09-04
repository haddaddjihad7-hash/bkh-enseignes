import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import MediaImage from './MediaImage.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function DomainSlider({ domains }) {
  const { tr } = useLanguage()
  const swiperRef = useRef(null)
  const [active, setActive] = useState(0)

  return (
    <div className="relative">
      <div className="flex items-center gap-3 md:gap-6">
        {/* Bouton précédent */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => swiperRef.current?.slidePrev()}
          className="hover-target flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-blanc backdrop-blur-md transition-all duration-300 hover:border-electrique-soft hover:bg-white/10 md:h-14 md:w-14"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Slider central */}
        <div className="min-w-0 flex-1">
          <Swiper
            loop
            slidesPerView={1}
            speed={700}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActive(s.realIndex)}
          >
            {domains.map((domain) => (
              <SwiperSlide key={domain.id}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px] md:gap-6">
                  {/* Photo principale du domaine */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-premium md:aspect-[16/10]">
                    <MediaImage
                      src={domain.images[0]}
                      label={`${tr(domain.title)} 01`}
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="font-mono text-[11px] uppercase tracking-widest2 text-electrique-soft">
                        {domain.number} / 06
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-blanc md:text-3xl">{tr(domain.title)}</h3>
                      <p className="mt-2 max-w-md text-[14px] font-light text-gris-clair">{tr(domain.description)}</p>
                    </div>
                  </div>

                  {/* Les 2 autres photos disponibles du domaine */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                    {[domain.images[1], domain.images[2]].map((src, i) => (
                      <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-premium md:aspect-auto md:flex-1">
                        <MediaImage
                          src={src}
                          label={`${tr(domain.title)} 0${i + 2}`}
                          className="h-full w-full"
                          imgClassName="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bouton suivant */}
        <button
          type="button"
          aria-label="Next"
          onClick={() => swiperRef.current?.slideNext()}
          className="hover-target flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-blanc backdrop-blur-md transition-all duration-300 hover:border-electrique-soft hover:bg-white/10 md:h-14 md:w-14"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Points de navigation */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {domains.map((domain, i) => (
          <motion.button
            key={domain.id}
            aria-label={tr(domain.title)}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className="h-1.5 rounded-full bg-white/20 transition-all duration-400"
            animate={{ width: active === i ? 26 : 8, backgroundColor: active === i ? '#60a5fa' : 'rgba(255,255,255,0.2)' }}
          />
        ))}
      </div>
    </div>
  )
}
