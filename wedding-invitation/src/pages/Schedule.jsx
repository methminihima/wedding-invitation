import React from 'react'
import { Clock, Calendar, Heart, GlassWater, Music, Utensils, Award } from 'lucide-react'

function Schedule() {
  const events = [
    {
      time: '09:00 AM',
      title: 'Welcome Drinks & Traditional Sweets',
      description: 'Arrival of family and guests. Enjoy herbal drinks & traditional Sri Lankan delicacies.',
      icon: GlassWater,
      badge: 'Arrival',
    },
    {
      time: '09:30 AM',
      title: 'Traditional Poruwa Ceremony',
      description: 'Auspicious Poruwa ceremony with Magul Bera drums and Jayamangala Gatha chanting.',
      icon: Heart,
      badge: 'Nekatha',
    },
    {
      time: '10:45 AM',
      title: 'Ring Exchange & Registration',
      description: 'Exchanging wedding bands, vows of love, and signing the marriage register.',
      icon: Award,
      badge: 'Ceremony',
    },
    {
      time: '11:30 AM',
      title: 'Toast & Cake Cutting',
      description: 'Raising a glass to the newly married couple followed by wedding cake cutting.',
      icon: GlassWater,
      badge: 'Celebration',
    },
    {
      time: '12:30 PM',
      title: 'Grand Banquet Lunch',
      description: 'Lavish gourmet buffet spread accompanied by live acoustic music.',
      icon: Utensils,
      badge: 'Feast',
    },
    {
      time: '02:30 PM',
      title: 'First Dance & Celebratory Farewell',
      description: 'The couple takes the floor for their romantic first dance followed by farewells.',
      icon: Music,
      badge: 'Party',
    },
  ]

  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sandaruwan+%26+Sasini+Wedding+Celebration&dates=20261212T040000Z/20261212T100000Z&details=Join+us+for+the+wedding+ceremony!&location=Araliya+Grand,+Nuwara+Eliya"

  return (
    <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
      
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8C7134] font-semibold">Celebrate With Us</span>
        <h1 className="font-playfair text-4xl sm:text-6xl text-[#1F3E2F] font-semibold my-2">Wedding Events</h1>
        <p className="text-sm sm:text-base text-[#78704F]">
          Saturday, 12th December 2026 • Araliya Grand, Nuwara Eliya
        </p>

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1F3E2F] text-[#F7F2E7] hover:bg-[#2F5A45] transition-all shadow-md"
        >
          <Calendar className="w-4 h-4 text-[#D3BD86]" />
          <span>Add to Google Calendar</span>
        </a>
      </div>

      <div className="space-y-5">
        {events.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} className="ariya-card rounded-2xl p-5 border border-[#D3BD86] flex flex-col sm:flex-row sm:items-center gap-4 relative overflow-hidden">
              <span className="ariya-card-inner-border" />
              <div className="sm:w-36 flex-shrink-0 flex items-center gap-2 bg-[#1F3E2F] px-3.5 py-2 rounded-xl text-[#F7F2E7]">
                <Clock className="w-4 h-4 text-[#D3BD86]" />
                <span className="font-mono text-sm font-bold">{item.time}</span>
              </div>
              <div className="hidden sm:flex w-10 h-10 rounded-full bg-white/80 border border-[#D3BD86] items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#8C7134]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-playfair text-base sm:text-lg text-[#1F3E2F] font-bold">{item.title}</h3>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-[#1F3E2F]/10 text-[#1F3E2F] border border-[#1F3E2F]/20 font-bold">{item.badge}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#78704F] leading-relaxed">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule
