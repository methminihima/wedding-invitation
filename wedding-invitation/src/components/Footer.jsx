import React from 'react'
import { Phone, Heart, Share2, ArrowUp } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Sasini & Sandaruwan Wedding Invitation',
        text: 'You are invited to celebrate the wedding of Sasini & Sandaruwan!',
        url: window.location.href,
      }).catch(err => console.log(err))
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Invitation link copied to clipboard!")
    }
  }

  return (
    <footer className="relative w-full bg-[#FAF7EE] text-[#3E2A1E] overflow-hidden pt-16 pb-28 sm:pb-24 px-4 border-t border-[#D3BD86]/60">

      {/* Delicate Double Gold Border on Left & Right */}
      <div className="absolute top-0 bottom-0 left-2.5 sm:left-6 w-[5px] flex justify-between pointer-events-none">
        <div className="w-[1.5px] h-full bg-[#D3BD86]" />
        <div className="w-[1px] h-full bg-[#D3BD86]/50" />
      </div>
      <div className="absolute top-0 bottom-0 right-2.5 sm:right-6 w-[5px] flex justify-between pointer-events-none">
        <div className="w-[1px] h-full bg-[#D3BD86]/50" />
        <div className="w-[1.5px] h-full bg-[#D3BD86]" />
      </div>

      {/* Subtle Geometric Star Lattice Background Pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="kandyan-lattice" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Square 1 */}
            <rect x="15" y="15" width="30" height="30" fill="none" stroke="#D3BD86" strokeWidth="0.8" />
            {/* Square 2 rotated 45 deg */}
            <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" fill="none" stroke="#D3BD86" strokeWidth="0.8" />
            {/* Connecting grid lines */}
            <path d="M 0 30 L 15 30 M 45 30 L 60 30 M 30 0 L 30 15 M 30 45 L 30 60" stroke="#D3BD86" strokeWidth="0.6" />
            <path d="M 0 0 L 15 15 M 60 0 L 45 15 M 0 60 L 15 45 M 60 60 L 45 45" stroke="#D3BD86" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kandyan-lattice)" />
      </svg>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center text-center px-4">

        {/* Top Header: WITH LOVE, */}
        <p className="font-serif text-xs sm:text-sm font-semibold tracking-[0.38em] uppercase text-[#9E7D42] mb-3">
          WITH LOVE,
        </p>

        {/* Couple Names */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-normal text-[#3E2A1E] tracking-tight mb-3">
          Sasini &amp; Sandaruwan
        </h2>

        {/* Date & Venue */}
        <p className="font-cormorant text-sm sm:text-base text-[#6B533E] font-medium tracking-wide flex flex-wrap items-center justify-center gap-2 mb-8">
          <span>October 23, 2026</span>
          <span className="text-[#C59B3F] text-xs">◆</span>
          <span>Hotel Sanctuary Lake, Kurunegala</span>
        </p>

        {/* Call Buttons */}
        <div className="flex flex-col items-center gap-3.5 w-full max-w-sm mb-10">
          <a
            href="tel:0703585940"
            className="w-72 sm:w-80 py-2.5 px-6 rounded-full border border-[#D3BD86]/90 bg-white/85 backdrop-blur-xs hover:bg-white hover:border-[#B49A55] hover:shadow-md active:scale-98 transition-all flex items-center justify-between text-[#8C7134] group cursor-pointer"
            title="Call Sandaruwan: 070 358 5940"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#A6803F] group-hover:scale-110 transition-transform" />
              <span className="font-serif text-sm sm:text-base font-medium tracking-wide text-[#7A5C28]">
                Call Sandaruwan
              </span>
            </div>
            <span className="font-cormorant text-sm font-semibold tracking-wider text-[#9E7D42]">
              070 358 5940
            </span>
          </a>

          <a
            href="tel:0777525416"
            className="w-72 sm:w-80 py-2.5 px-6 rounded-full border border-[#D3BD86]/90 bg-white/85 backdrop-blur-xs hover:bg-white hover:border-[#B49A55] hover:shadow-md active:scale-98 transition-all flex items-center justify-between text-[#8C7134] group cursor-pointer"
            title="Call Sasini: 077 752 5416"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#A6803F] group-hover:scale-110 transition-transform" />
              <span className="font-serif text-sm sm:text-base font-medium tracking-wide text-[#7A5C28]">
                Call Sasini
              </span>
            </div>
            <span className="font-cormorant text-sm font-semibold tracking-wider text-[#9E7D42]">
              077 752 5416
            </span>
          </a>
        </div>

        {/* Thank You Section */}
        <h3 className="font-playfair text-2xl sm:text-3xl font-normal text-[#3E2A1E] tracking-wide mb-2">
          Thank You
        </h3>

        <p className="font-cormorant text-sm sm:text-base text-[#6B533E] font-medium tracking-wide mb-5 max-w-sm">
          Thank you for being a part of our special day!
        </p>

        {/* Gold Heart Motif */}
        <div className="flex items-center justify-center text-[#B8934A] mb-8">
          <Heart className="w-5 h-5 fill-[#B8934A] text-[#B8934A]" />
        </div>

        {/* Minimal Footer Tools: Share & Back to top */}
        <div className="flex items-center justify-center gap-5 pt-4 border-t border-[#D3BD86]/40 text-xs text-[#8C7134]">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 hover:text-[#3E2A1E] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#3E2A1E] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer

