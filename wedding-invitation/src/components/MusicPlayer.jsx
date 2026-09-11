import React, { useState, useEffect, useRef } from 'react'
import { Music } from 'lucide-react'
import musiAudio from '../music/musi.mp3'

function MusicPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
  const fadeIntervalRef = useRef(null)

  const MAX_VOLUME = 0.85
  const FADE_IN_SECONDS = 2.0
  const FADE_OUT_SECONDS = 3.5

  const playAudio = () => {
    if (!audioRef.current) return
    const audio = audioRef.current

    // Start with volume 0 for smooth fade-in if starting from beginning
    if (audio.currentTime < 0.5) {
      audio.volume = 0
    }

    const promise = audio.play()
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsPlaying(true)
        })
        .catch((err) => {
          console.log("Autoplay waiting for user interaction:", err)
        })
    }
  }

  // Attempt autoplay immediately on mount and on first user interaction
  useEffect(() => {
    playAudio()

    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio()
      }
    }

    window.addEventListener('click', handleFirstInteraction, { once: true })
    window.addEventListener('touchstart', handleFirstInteraction, { once: true })
    window.addEventListener('scroll', handleFirstInteraction, { once: true })

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('scroll', handleFirstInteraction)
    }
  }, [])

  // Trigger when envelope opens or page mounts
  useEffect(() => {
    if (autoPlayTrigger) {
      playAudio()
    }
  }, [autoPlayTrigger])

  // Continuous monitoring for Smooth Fade-in, Fade-out, and Seamless Looping
  useEffect(() => {
    if (!isPlaying) {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
      return
    }

    const checkVolumeAndLoop = () => {
      const audio = audioRef.current
      if (!audio || isMuted) return

      const duration = audio.duration
      const currentTime = audio.currentTime

      if (!duration || isNaN(duration) || duration <= 0) return

      // 1. Smooth Fade-Out as the track approaches its end
      if (currentTime >= duration - FADE_OUT_SECONDS) {
        const remaining = Math.max(0, duration - currentTime)
        const fadeOutRatio = remaining / FADE_OUT_SECONDS
        audio.volume = Math.max(0, Math.min(MAX_VOLUME, fadeOutRatio * MAX_VOLUME))

        // When nearly at the end (within 0.12s), loop back to the start seamlessly
        if (remaining <= 0.12) {
          audio.currentTime = 0
          audio.volume = 0
          audio.play().catch(() => {})
        }
      } 
      // 2. Smooth Fade-In at the start of track or loop
      else if (currentTime < FADE_IN_SECONDS) {
        const fadeInRatio = Math.max(0, currentTime / FADE_IN_SECONDS)
        audio.volume = Math.max(0, Math.min(MAX_VOLUME, fadeInRatio * MAX_VOLUME))
      } 
      // 3. Steady comfortable listening volume
      else {
        audio.volume = MAX_VOLUME
      }
    }

    fadeIntervalRef.current = setInterval(checkVolumeAndLoop, 40)

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
    }
  }, [isPlaying, isMuted])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      playAudio()
    }
  }

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center">
      <audio
        ref={audioRef}
        src={musiAudio}
        preload="auto"
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.volume = 0
            audioRef.current.play().catch(() => {})
          }
        }}
      />

      {/* Floating Circular Audio Button */}
      <button
        onClick={togglePlay}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md border border-[#D3BD86]/50 cursor-pointer ${
          isPlaying 
            ? 'bg-[#3E2A1E] text-[#F7F2E7] shadow-[0_0_15px_rgba(62,42,30,0.4)] scale-105' 
            : 'bg-[#3E2A1E]/80 text-[#F7F2E7]/80 hover:bg-[#3E2A1E]'
        }`}
        title={isPlaying ? "Pause Music" : "Play Music"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <Music className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} style={{ animationDuration: '2s' }} />
      </button>
    </div>
  )
}

export default MusicPlayer
