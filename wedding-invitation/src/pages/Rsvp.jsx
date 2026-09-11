import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { CheckCircle2, Heart, Send, Sparkles, UserCheck, Utensils, AlertCircle } from 'lucide-react'

function Rsvp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guestCount: '1',
    dietary: 'Non-Vegetarian',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      alert("Please enter your name")
      return
    }

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffd700', '#f43f5e', '#ffffff'],
      })
    } catch (err) {
      console.log("Confetti trigger:", err)
    }

    // Save RSVP to local storage
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]')
    existing.push({ ...formData, timestamp: new Date().toISOString() })
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing))

    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-16 px-4 max-w-2xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">Kindly Respond By</span>
        <h1 className="font-script text-5xl sm:text-7xl gold-text-gradient my-2">RSVP</h1>
        <p className="font-serif-royal text-sm sm:text-base text-amber-200/80">
          Please respond on or before 1st November 2026
        </p>
      </div>

      {submitted ? (
        <div className="glass-card rounded-3xl p-8 border border-[#d4af37] text-center shadow-2xl animate-fade-in relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border-2 border-[#ffd700] flex items-center justify-center mx-auto mb-4 text-[#ffd700]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-serif-royal text-3xl text-[#ffd700] mb-2">Thank You, {formData.name}!</h2>
          <p className="text-sm text-[#e2d8c3]/90 max-w-md mx-auto">
            {formData.attending === 'yes'
              ? `We are delighted that you will join us to celebrate our wedding! We look forward to seeing you on 28th November 2026.`
              : `We will miss you on our special day, but thank you so much for your warm blessings!`}
          </p>

          <div className="my-6 p-4 rounded-2xl bg-[#0f1715]/80 border border-[#d4af37]/30 text-xs text-amber-200/80 max-w-xs mx-auto">
            <p className="font-mono uppercase tracking-widest text-[#ffd700] font-bold">Confirmation Reference</p>
            <p className="text-base font-bold text-[#f3e5ab] mt-1">#RSVP-{Math.floor(100000 + Math.random() * 900000)}</p>
            <p className="text-[10px] text-[#e2d8c3]/60 mt-1">Status: {formData.attending === 'yes' ? 'Confirmed Attending' : 'Declined'}</p>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#d4af37] hover:underline"
          >
            Submit another RSVP response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl space-y-6">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#ffd700] font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Kasun Perera & Family"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0f1715]/90 border border-[#d4af37]/30 text-[#f1e9da] placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] text-sm"
            />
          </div>

          {/* Email / Contact */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#ffd700] font-semibold mb-2">
              Email / Mobile Number
            </label>
            <input
              type="text"
              placeholder="e.g. kasun@example.com / 0771234567"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0f1715]/90 border border-[#d4af37]/30 text-[#f1e9da] placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] text-sm"
            />
          </div>

          {/* Attendance Radio Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#ffd700] font-semibold mb-2">
              Will You Be Attending? *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: 'yes' })}
                className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  formData.attending === 'yes'
                    ? 'bg-[#d4af37]/20 border-[#ffd700] text-[#ffd700] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#0f1715]/60 border-amber-900/40 text-[#e2d8c3]/60'
                }`}
              >
                <Heart className="w-4 h-4 fill-current text-rose-500" />
                <span>Joyfully Accepts</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: 'no' })}
                className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  formData.attending === 'no'
                    ? 'bg-rose-950/40 border-rose-600 text-rose-300'
                    : 'bg-[#0f1715]/60 border-amber-900/40 text-[#e2d8c3]/60'
                }`}
              >
                <span>Regretfully Declines</span>
              </button>
            </div>
          </div>

          {formData.attending === 'yes' && (
            <>
              {/* Guest Count */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#ffd700] font-semibold mb-2">
                  Number of Guests
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f1715]/90 border border-[#d4af37]/30 text-[#f1e9da] focus:outline-none focus:border-[#d4af37] text-sm"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>

              {/* Dietary Preferences */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#ffd700] font-semibold mb-2">
                  Dietary Requirements
                </label>
                <select
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f1715]/90 border border-[#d4af37]/30 text-[#f1e9da] focus:outline-none focus:border-[#d4af37] text-sm"
                >
                  <option value="Non-Vegetarian">Non-Vegetarian Buffet</option>
                  <option value="Vegetarian">Vegetarian Special</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Halal">Halal</option>
                </select>
              </div>
            </>
          )}

          {/* Blessing Message */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#ffd700] font-semibold mb-2">
              Warm Wishes / Blessing Message
            </label>
            <textarea
              rows={3}
              placeholder="Leave your heartfelt wishes for Kasun & Shenali..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0f1715]/90 border border-[#d4af37]/30 text-[#f1e9da] placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#aa7c11] text-[#0d1512] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 fill-current" />
            <span>Send RSVP Confirmation</span>
          </button>

        </form>
      )}

    </div>
  )
}

export default Rsvp
