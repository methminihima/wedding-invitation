import React, { useState, useEffect } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  Landmark,
  CalendarCheck,
  ChevronDown
} from 'lucide-react'
import CountdownTimer from '../components/CountdownTimer'
import bgImage from '../images/bg.png'
import bgMobile from '../images/bg 2.png'
import vidMandala from '../images/vid.mp4'
import couplesWebm from '../images/couples2.webm'
import kkcImage from '../images/kkc.png'

function Home({ onReopenEnvelope }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center">
      {/* Background Container for the Invitation Page */}
      <div
        id="invitation"
        className="w-full relative overflow-x-hidden flex flex-col items-center min-h-screen"
        style={{
          backgroundColor: '#F7F2E7',
          backgroundImage: `url(${isMobile ? bgMobile : bgImage})`,
          backgroundSize: isMobile ? 'cover' : 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Top Half Mandala Video Animation */}
        <div className="absolute top-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none z-10">
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

        {/* Main Invitation Card Frame as shown in Reference Image */}
        <div className="relative z-10 w-[94%] max-w-[430px] sm:max-w-lg mx-auto mt-14 sm:mt-20 mb-6 rounded-3xl border border-[#D3BD86]/80 p-5 sm:p-7 text-center bg-[#FAF6EE]/35 backdrop-blur-[0.5px] shadow-sm flex flex-col items-center">

          <h1 className="font-playfair font-bold text-xl sm:text-3xl text-[#3E2A1E] tracking-[0.2em] uppercase mb-1">
            SRI SUBA MANGALAM!
          </h1>

          <div className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#8C7134] font-semibold my-1.5 leading-relaxed">
            <p>YOU ARE INVITED TO THE WEDDING</p>
            <p className="mt-0.5">OF</p>
          </div>

          {/* Gold Diamond Line */}
          <div className="flex items-center gap-2.5 w-40 sm:w-48 my-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D3BD86] to-[#D3BD86]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#B49A55]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D3BD86] to-[#D3BD86]" />
          </div>

          {/* Couple Names - Larger and more prominent */}
          <div className="my-2.5 flex items-center justify-center gap-3 font-couple-name text-4xl sm:text-5xl md:text-6xl text-[#3E2A1E]">
            <span>Sasini</span>
            <span className="text-[#963A30] font-normal">&</span>
            <span>Sandaruwan</span>
          </div>

          {/* Parents Information */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm my-2.5 text-xs sm:text-sm text-[#78704F]">
            <div>
              <span className="block font-bold text-[#3F3B29] text-[12px] sm:text-sm">Daughter of</span>
              <span className="block text-[#3E2A1E] font-semibold text-[11px] sm:text-xs">Mr. & Mrs Priyasinghe</span>
            </div>
            <div>
              <span className="block font-bold text-[#3F3B29] text-[12px] sm:text-sm">Son of</span>
              <span className="block text-[#3E2A1E] font-semibold text-[11px] sm:text-xs">Mr. & Mrs Ekanayake</span>
            </div>
          </div>

          {/* Date Section: OCTOBER 23, 2026 */}
          <div className="my-3 flex items-center justify-center gap-3 text-[#3E2A1E] w-full max-w-[310px] sm:max-w-sm">
            <div className="flex-1 border-t border-b border-[#5A402B]/50 py-1">
              <span className="text-xs sm:text-sm uppercase font-cormorant font-bold tracking-[0.25em] block">
                OCTOBER
              </span>
            </div>
            <span className="text-5xl sm:text-6xl font-cormorant font-bold text-[#3E2A1E] px-1 leading-none">
              23
            </span>
            <div className="flex-1 border-t border-b border-[#5A402B]/50 py-1">
              <span className="text-xs sm:text-sm uppercase font-cormorant font-bold tracking-[0.25em] block">
                2026
              </span>
            </div>
          </div>

          {/* Traditional Couple Animation (WebM with alpha transparency) */}
          <div className="mt-2 mb-2 flex justify-center">
            <video
              src={couplesWebm}
              autoPlay
              loop
              muted
              playsInline
              className="w-56 sm:w-64 md:w-72 object-contain drop-shadow-sm pointer-events-none"
            />
          </div>

        </div>

        {/* Bottom Spacing */}
        <div className="h-10" />
      </div>

      {/* Second Section: Our Story & Journey Together with Luxury Double Gold Frame */}
      <div
        id="story"
        className="w-[94%] max-w-2xl mx-auto my-12 relative rounded-[32px] sm:rounded-[40px] border border-[#D3BD86]/80 p-6 sm:p-10 bg-[#FAF7EE]/50 backdrop-blur-[1px] shadow-lg flex flex-col items-center text-left"
      >
        {/* Inner Gold Border Frame */}
        <div className="absolute inset-2 sm:inset-2.5 rounded-[26px] sm:rounded-[34px] border border-[#D3BD86]/50 pointer-events-none" />

        {/* Top Center Accent Motif */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 bg-[#F7F2E7] text-[#B49A55] text-xs font-serif z-10 flex items-center gap-1.5">
          <span className="w-2.5 h-[1px] bg-[#D3BD86]" />
          <span>✤</span>
          <span className="w-2.5 h-[1px] bg-[#D3BD86]" />
        </div>

        {/* Top Story Block: Couple Art on Left, Story on Right */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 my-4 relative z-10">

          {/* Couple Illustration - kkc.png */}
          <div className="w-48 sm:w-56 shrink-0 flex justify-center">
            <img
              src={kkcImage}
              alt="Sasini & Sandaruwan"
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Story Text */}
          <div className="flex-1 text-center sm:text-left">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8C7134] font-semibold block mb-1">
              OUR STORY
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#3E2A1E] tracking-tight mb-2">
              Together Forever
            </h2>

            {/* Gold Diamond Line */}
            <div className="flex items-center gap-2 w-28 mx-auto sm:mx-0 my-3">
              <div className="h-[1px] flex-1 bg-[#D3BD86]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#B49A55]" />
              <div className="h-[1px] flex-1 bg-[#D3BD86]" />
            </div>

            <p className="text-xs sm:text-sm text-[#5C5642] leading-relaxed my-3 font-medium">
              We are delighted to invite you to celebrate the beginning of our forever as we exchange vows surrounded by our loved ones. Your presence will make our special day even more memorable.
            </p>

            <p className="font-couple-name text-2xl sm:text-3xl italic text-[#3E2A1E] font-bold mt-4 mb-2">
              Friday, 23<sup>rd</sup> October 2026
            </p>

            <p className="text-[11px] sm:text-xs text-[#78704F] leading-relaxed">
              <strong className="text-[#3F3B29] font-bold">Together with their families</strong> request the honour of your presence at the celebration of their marriage.
            </p>
          </div>
        </div>

        {/* Venue Section with Horizontal Divider Lines */}
        <div className="w-full my-8 relative z-10">
          <div className="w-full border-t border-[#D3BD86]/50" />

          <div className="py-5 text-center">
            <h3 className="font-playfair font-bold text-sm sm:text-base text-[#3E2A1E] tracking-[0.35em] uppercase">
              HOTEL SANCTUARY LAKE
            </h3>
            <p className="text-[10px] sm:text-xs text-[#78704F] tracking-[0.3em] uppercase mt-1">
              KURUNEGALA, SRI LANKA
            </p>
          </div>

          <div className="w-full border-t border-[#D3BD86]/50" />
        </div>
      </div>

      {/* Countdown Section - pushed down for better breathing room */}
      <div className="w-full max-w-2xl px-4 mt-8 mb-12 text-center">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7134] font-semibold">The Big Day Awaits</span>
          <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-[#3E2A1E] mt-1">Counting Down</h3>
        </div>
        <CountdownTimer targetDate="2026-10-23T08:30:00" />
      </div>

      {/* Third Section: Wedding Events */}
      <div id="events" className="w-[94%] max-w-2xl mx-auto my-8 relative flex flex-col items-center">
        <div className="text-center mb-7">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#8C7134] font-semibold block mb-2">
            CELEBRATE WITH US
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#3E2A1E] tracking-tight mb-2">
            Wedding Events
          </h2>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D3BD86]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#B49A55]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D3BD86]" />
          </div>
        </div>

        <div className="space-y-4 w-full max-w-xl mx-auto">
          {/* Poruwa Ceremony */}
          <div className="relative rounded-[26px] border border-[#D3BD86] p-5 sm:p-6 bg-gradient-to-br from-[#FAF7EE] to-[#F5EDD8]/60 shadow-md flex items-center gap-5">
            <div className="absolute inset-2 rounded-[20px] border border-[#D3BD86]/35 pointer-events-none" />
            {/* Icon Badge */}
            <div className="w-16 h-16 rounded-2xl bg-[#3E2A1E] shrink-0 flex items-center justify-center shadow-lg relative z-10">
              <Landmark className="w-7 h-7 text-[#D3BD86]" />
            </div>
            {/* Event Details */}
            <div className="flex-1 relative z-10 text-left">
              <h3 className="font-playfair font-bold text-sm sm:text-base text-[#3E2A1E] tracking-[0.22em] uppercase mb-2.5">
                Poruwa Ceremony
              </h3>
              <div className="space-y-1.5 text-xs text-[#5C5642]">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B49A55] shrink-0" />
                  <span className="font-medium">23rd October 2026</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#B49A55] shrink-0" />
                  <span className="font-medium">9:30 AM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B49A55] shrink-0" />
                  <span>Hotel Sanctuary Lake, Kurunegala</span>
                </div>
              </div>
            </div>
          </div>

          {/* Save the Date Button */}
          <div className="pt-1 flex justify-center">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Sasini+%26+Sandaruwan&dates=20261023T030000Z/20261023T100000Z&details=Wedding+Celebration+of+Sasini+%26+Sandaruwan+at+Hotel+Sanctuary+Lake,+Kurunegala&location=Hotel+Sanctuary+Lake,+Kurunegala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm rounded-2xl border border-[#D3BD86]/70 bg-[#FAF7EE] px-4 py-3.5 flex items-center justify-between shadow-sm hover:shadow-md hover:border-[#B49A55] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3E2A1E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <CalendarCheck className="w-5 h-5 text-[#D3BD86]" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm text-[#3E2A1E] leading-tight">Save the Date</p>
                  <p className="text-[11px] text-[#78704F] mt-0.5">Add the wedding to your calendar</p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#3E2A1E]/8 flex items-center justify-center text-[#78704F] group-hover:bg-[#3E2A1E] group-hover:text-[#D3BD86] transition-colors">
                <ChevronDown className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Fourth Section: Venue & Google Map */}
      <div id="venue" className="w-[94%] max-w-2xl mx-auto my-12 pt-4 flex flex-col items-center">
        <div className="text-center mb-6">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8C7134] font-semibold block mb-1">
            LOCATION & DIRECTIONS
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#3E2A1E] tracking-tight mb-1">
            Hotel Sanctuary Lake
          </h2>
          <p className="text-xs sm:text-sm text-[#78704F] tracking-wider uppercase mb-2">
            Kurunegala, Sri Lanka
          </p>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#B49A55] mx-auto my-2" />
        </div>

        {/* Map Frame */}
        <div className="relative rounded-[28px] border-2 border-[#D3BD86]/80 p-2 sm:p-3 bg-[#FAF7EE]/60 shadow-lg w-full max-w-xl overflow-hidden">
          <div className="rounded-[22px] overflow-hidden w-full h-72 sm:h-80 shadow-inner">
            <iframe
              title="Hotel Sanctuary Lake Kurunegala Map"
              src="https://maps.google.com/maps?q=Hotel+Sanctuary+Lake+Kurunegala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Directions Button */}
          <div className="p-4 text-center">
            <a
              href="https://share.google/poAfSrN6v3fSHmwwC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#3E2A1E] text-[#F7F2E7] font-semibold text-xs tracking-wider uppercase shadow-md hover:bg-[#523A28] hover:scale-105 transition-all"
            >
              <MapPin className="w-4 h-4 text-[#D3BD86]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
