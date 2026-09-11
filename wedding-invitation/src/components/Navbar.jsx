import React, { useState, useEffect } from 'react'
import { Home, Heart, Calendar, MapPin } from 'lucide-react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('invitation')

  const navItems = [
    { label: 'Invitation', id: 'invitation', icon: Home },
    { label: 'Story', id: 'story', icon: Heart },
    { label: 'Events', id: 'events', icon: Calendar },
    { label: 'Venue', id: 'venue', icon: MapPin },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id) => {
    setActiveSection(id)
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    if (id === 'invitation') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[85%] max-w-[280px]">
      <div className="bg-[#FAF7EE]/95 backdrop-blur-md rounded-full py-2.5 px-6 flex items-center justify-between border border-[#D3BD86]/70 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              title={item.label}
              className={`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                active
                  ? 'text-[#3E2A1E] scale-115'
                  : 'text-[#7A604D] hover:text-[#3E2A1E] hover:scale-105'
              }`}
            >
              <Icon 
                className={`w-[21px] h-[21px] transition-transform ${
                  active ? 'stroke-[2.4px] text-[#3E2A1E]' : 'stroke-[1.8px]'
                }`} 
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
