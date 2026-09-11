import React, { useState } from 'react'
import { X, ZoomIn, Heart, Sparkles } from 'lucide-react'

function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null)

  const photos = [
    {
      id: 1,
      title: 'Romantic Sunset Walk',
      caption: 'Strolling hand-in-hand along Bentota golden shores.',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Under The Stars',
      caption: 'A magical night at Ella tea estate bungalow.',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Engagement Smiles',
      caption: 'The golden hour light when we got engaged.',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Forever & Always',
      caption: 'Shared giggles and promises for a lifetime.',
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Pre-Wedding Celebration',
      caption: 'Surrounded by love, joy, and warmth.',
      url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Two Hearts United',
      caption: 'Stepping into the next chapter of our story.',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">Captured Memories</span>
        <h1 className="font-script text-5xl sm:text-7xl gold-text-gradient my-2">Photo Gallery</h1>
        <p className="font-serif-royal text-sm sm:text-base text-amber-200/80">
          Glimpses of our love, laughter, and journey together.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="group cursor-pointer glass-card glass-card-hover rounded-2xl p-3 border border-[#d4af37]/30 overflow-hidden relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#121f1a] relative">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1715]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-royal text-base text-[#ffd700] font-semibold">{photo.title}</h3>
                  <ZoomIn className="w-4 h-4 text-[#ffd700]" />
                </div>
                <p className="text-xs text-[#e2d8c3]/80 mt-1">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Viewer */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-[#070c0a]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full glass-card rounded-3xl p-4 border border-[#d4af37]/50 shadow-2xl flex flex-col items-center">
            
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#182823] border border-[#d4af37]/40 text-[#ffd700] hover:scale-110 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden bg-[#0d1512] mb-4 flex items-center justify-center">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl"
              />
            </div>

            <div className="text-center px-4">
              <h3 className="font-serif-royal text-2xl text-[#ffd700] mb-1">{activePhoto.title}</h3>
              <p className="text-xs sm:text-sm text-[#e2d8c3]/80">{activePhoto.caption}</p>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Gallery
