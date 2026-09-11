import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Feather } from 'lucide-react'
import bgImage from '../images/bg.png'
import bgMobile from '../images/bg 2.png'
import vidMandala from '../images/vid.mp4'
import vvidMp4 from '../images/vvid.mp4'

function EnvelopeCover({ onOpen, isMuted, onToggleMute }) {
  const [isPlayingTransition, setIsPlayingTransition] = useState(false)
  const [isTransitionActive, setIsTransitionActive] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleFinish = () => {
    if (isFadingOut || isDismissed) return
    setIsFadingOut(true)
    setIsTransitionActive(false)
    if (videoRef.current) {
      try { videoRef.current.pause() } catch (e) { console.log(e) }
    }
    setTimeout(() => {
      setIsDismissed(true)
      if (onOpen) onOpen()
    }, 500)
  }

  // Safety fallback — if onEnded doesn't fire, dismiss after 12s
  useEffect(() => {
    if (isPlayingTransition && isTransitionActive) {
      const timer = setTimeout(() => {
        handleFinish()
      }, 12000)
      return () => clearTimeout(timer)
    }
  }, [isPlayingTransition, isTransitionActive])

  const handleOpen = () => {
    if (isPlayingTransition) return
    setIsPlayingTransition(true)
    setTimeout(() => {
      setIsTransitionActive(true)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(err => console.log('Autoplay blocked:', err))
      }
    }, 40)
  }

  if (isDismissed) return null

  return (
    <div
      className={`fixed inset-0 z-50 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-between p-4 sm:p-6 text-[#3F3B29] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#F7F2E7',
        backgroundImage: `url(${isMobile ? bgMobile : bgImage})`,
        backgroundSize: isMobile ? 'cover' : 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Top Half Mandala Video Animation */}
      <div className={`absolute top-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none z-10 transition-opacity duration-500 ${
        isPlayingTransition ? 'opacity-0' : 'opacity-100'
      }`}>
        <video
          src={vidMandala}
          autoPlay
          loop
          muted
          playsInline
          className="w-[175vw] sm:w-[680px] md:w-[780px] max-w-none -translate-y-1/2 object-contain mix-blend-multiply"
          style={{
            WebkitMaskImage: 'radial-gradient(circle closest-side at 50% 50%, black 78%, rgba(0,0,0,0.5) 88%, transparent 98%)',
            maskImage: 'radial-gradient(circle closest-side at 50% 50%, black 78%, rgba(0,0,0,0.5) 88%, transparent 98%)',
          }}
        />
      </div>

      {/* Top Bar with Audio Control */}
      <div className={`w-full max-w-lg flex justify-between items-center z-20 pt-2 px-2 transition-opacity duration-500 ${
        isPlayingTransition ? 'opacity-0' : 'opacity-100'
      }`}>
        <div />
        <button
          onClick={onToggleMute}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-[#B49A55]/50 shadow-sm flex items-center justify-center text-[#3E2A1E] hover:scale-105 transition-transform cursor-pointer"
          title={isMuted ? "Play Sound" : "Mute Sound"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-gray-500" /> : <Volume2 className="w-4 h-4 text-[#3E2A1E]" />}
        </button>
      </div>

      {/* Main Content Container */}
      <div className={`relative z-10 w-full max-w-lg p-6 sm:p-10 text-center flex flex-col items-center mt-auto mb-auto pt-28 sm:pt-40 transition-opacity duration-500 ${
        isPlayingTransition ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>

        {/* Top Subtitle */}
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#8C7134] font-semibold mb-4">
          T H E &nbsp; W E D D I N G &nbsp; O F
        </p>

        {/* Gold Diamond Line */}
        <div className="flex items-center gap-2.5 w-40 my-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D3BD86] to-[#D3BD86]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#B49A55]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D3BD86] to-[#D3BD86]" />
        </div>

        {/* Couple Names */}
        <div className="my-5 flex items-center justify-center gap-3 font-couple-name text-3xl sm:text-5xl text-[#3E2A1E]">
          <span>Sasini</span>
          <span className="text-[#963A30]">&</span>
          <span>Sandaruwan</span>
        </div>

        {/* Date */}
        <p className="font-cormorant text-sm sm:text-base text-[#523A28] font-medium italic tracking-wide mb-8">
          Friday, 23<sup>rd</sup> October 2026
        </p>

        {/* Open Button */}
        <button
          onClick={handleOpen}
          className="group px-8 py-3 rounded-full border-2 border-[#3E2A1E] text-[#3E2A1E] font-semibold text-xs tracking-[0.2em] uppercase bg-white/70 hover:bg-[#3E2A1E] hover:text-[#F7F2E7] active:scale-95 transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
        >
          <Feather className="w-4 h-4 text-[#8C7134] group-hover:text-[#F7F2E7] transition-colors" />
          <span>OPEN INVITATION</span>
        </button>
      </div>

      {/* Full-screen Wedding Video Transition — plays fully before site loads */}
      {isPlayingTransition && (
        <div
          className={`fixed inset-0 z-[100] w-full h-[100dvh] bg-[#FAF7EE] flex items-center justify-center overflow-hidden transition-opacity duration-500 ease-in-out ${
            isTransitionActive && !isFadingOut
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Full Screen Video — plays completely, site loads only after onEnded */}
          <video
            ref={videoRef}
            src={vvidMp4}
            autoPlay
            playsInline
            muted
            loop={false}
            onEnded={handleFinish}
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      )}

    </div>
  )
}

export default EnvelopeCover
