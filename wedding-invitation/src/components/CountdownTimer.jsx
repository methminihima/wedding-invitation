import React, { useState, useEffect } from 'react'

function CountdownTimer({ targetDate = "2026-12-12T09:30:00" }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }
    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="w-full max-w-xl mx-auto my-4 px-2">
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {timeBlocks.map((block, idx) => (
          <div
            key={idx}
            className="ariya-card rounded-2xl p-3 sm:p-4 text-center border border-[#D3BD86] shadow-md flex flex-col items-center justify-center"
          >
            <span className="font-playfair text-2xl sm:text-4xl font-bold text-[#3E2A1E]">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-[#78704F] uppercase tracking-wider font-semibold mt-1">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimer
