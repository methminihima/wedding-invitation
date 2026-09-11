import React from 'react'
import { MapPin, Navigation, Shirt, Car, Hotel } from 'lucide-react'

function VenueMap() {
  const mapsUrl = "https://maps.google.com/?q=Araliya+Grand+Nuwara+Eliya"

  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8C7134] font-semibold">Location & Guide</span>
        <h1 className="font-playfair text-4xl sm:text-6xl text-[#1F3E2F] font-semibold my-2">Venue & Location</h1>
        <p className="text-sm sm:text-base text-[#78704F]">Araliya Grand • Nuwara Eliya, Sri Lanka</p>
      </div>

      <div className="ariya-card rounded-3xl p-6 sm:p-8 border border-[#D3BD86] shadow-xl mb-8 relative overflow-hidden">
        <span className="ariya-card-inner-border" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3E2F] text-[#D3BD86] text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ceremony & Banquet Venue</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl text-[#1F3E2F] font-bold mb-1">Araliya Grand</h2>
            <p className="text-base text-[#3F3B29] font-bold">Nuwara Eliya, Sri Lanka</p>
            <p className="text-xs text-[#78704F] mt-1 font-mono">10, Waterfield Drive, Nuwara Eliya 22200</p>
            <p className="text-xs sm:text-sm text-[#78704F] mt-4 leading-relaxed">
              Nestled in the misty hills of Nuwara Eliya, Araliya Grand offers a breathtaking setting for our special day.
            </p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-xs font-bold bg-[#1F3E2F] text-[#F7F2E7] shadow-lg hover:bg-[#2F5A45] transition-all">
              <Navigation className="w-4 h-4 text-[#D3BD86]" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
          <div className="h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#D3BD86] shadow-inner bg-[#EFE8D6]">
            <iframe title="Venue Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.334057812948!2d80.7675543758823!3d6.969874818073539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3804e8d3df85b%3A0xb2b4d24f0c436979!2sAraliya%20Green%20Hills%20Hotel!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="ariya-card rounded-2xl p-5 border border-[#D3BD86] relative">
          <span className="ariya-card-inner-border" />
          <div className="w-10 h-10 rounded-full bg-[#1F3E2F] text-[#D3BD86] flex items-center justify-center mb-3"><Shirt className="w-5 h-5" /></div>
          <h3 className="font-playfair text-lg text-[#1F3E2F] font-bold mb-1">Dress Code</h3>
          <p className="text-xs text-[#8C7134] font-bold mb-2">Formal Traditional / Elegant Pastel</p>
          <p className="text-xs text-[#78704F] leading-relaxed">Sarees, National Dress, or Formal Suits in pastel, cream, or gold tones.</p>
        </div>
        <div className="ariya-card rounded-2xl p-5 border border-[#D3BD86] relative">
          <span className="ariya-card-inner-border" />
          <div className="w-10 h-10 rounded-full bg-[#1F3E2F] text-[#D3BD86] flex items-center justify-center mb-3"><Car className="w-5 h-5" /></div>
          <h3 className="font-playfair text-lg text-[#1F3E2F] font-bold mb-1">Parking & Valet</h3>
          <p className="text-xs text-[#8C7134] font-bold mb-2">Free Valet Available</p>
          <p className="text-xs text-[#78704F] leading-relaxed">Complimentary parking and valet service at the main entrance.</p>
        </div>
        <div className="ariya-card rounded-2xl p-5 border border-[#D3BD86] relative">
          <span className="ariya-card-inner-border" />
          <div className="w-10 h-10 rounded-full bg-[#1F3E2F] text-[#D3BD86] flex items-center justify-center mb-3"><Hotel className="w-5 h-5" /></div>
          <h3 className="font-playfair text-lg text-[#1F3E2F] font-bold mb-1">Accommodation</h3>
          <p className="text-xs text-[#8C7134] font-bold mb-2">Guest Room Discounts</p>
          <p className="text-xs text-[#78704F] leading-relaxed">Out-of-town guests can request special group room rates.</p>
        </div>
      </div>
    </div>
  )
}

export default VenueMap
