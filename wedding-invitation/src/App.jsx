import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PetalBackground from './components/PetalBackground'
import EnvelopeCover from './components/EnvelopeCover'
import MusicPlayer from './components/MusicPlayer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Schedule from './pages/Schedule'
import VenueMap from './pages/VenueMap'
import Gallery from './pages/Gallery'
import Rsvp from './pages/Rsvp'
import Wishes from './pages/Wishes'

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [autoPlayMusic, setAutoPlayMusic] = useState(false)

  const handleOpenEnvelope = () => {
    setShowEnvelope(false)
    setAutoPlayMusic(true)
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#F7F2E7] text-[#3F3B29] relative selection:bg-[#d4af37] selection:text-[#0d1512]">

        {/* Animated Rose Petals & Gold Sparkles Overlay */}
        <PetalBackground />

        {/* Digital Royal Wax-Sealed Envelope Opening */}
        {showEnvelope && (
          <EnvelopeCover onOpen={handleOpenEnvelope} />
        )}

        {/* Background Romantic Music Player */}
        <MusicPlayer autoPlayTrigger={autoPlayMusic} />

        {/* Desktop & Mobile Responsive Navigation */}
        <Navbar />

        {/* Main Content View Container with Route Switcher */}
        <main className="relative z-10 min-h-[calc(100vh-200px)]">
          <Routes>
            <Route path="/" element={<Home onReopenEnvelope={() => setShowEnvelope(true)} />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/venue" element={<VenueMap />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rsvp" element={<Rsvp />} />
            <Route path="/wishes" element={<Wishes />} />
          </Routes>
        </main>

        {/* Footer with Couple Monogram & Hashtag */}
        <Footer />

      </div>
    </Router>
  )
}

export default App