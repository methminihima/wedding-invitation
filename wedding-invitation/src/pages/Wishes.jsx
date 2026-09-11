import React, { useState, useEffect } from 'react'
import { Heart, MessageSquare, Send, Sparkles, User, ThumbsUp } from 'lucide-react'

function Wishes() {
  const initialWishes = [
    {
      id: 1,
      name: 'Nimal & Kanthi Perera',
      message: 'Wishing you both a lifetime of happiness, unconditional love, and endless smiles! May your home be filled with joy and warmth.',
      likes: 12,
      date: 'Yesterday',
    },
    {
      id: 2,
      name: 'Amal & Dilini',
      message: 'So happy for Kasun and Shenali! You two are truly made for each other. Can’t wait to celebrate on the 28th of November!',
      likes: 18,
      date: '2 days ago',
    },
    {
      id: 3,
      name: 'Dr. Rohan & Chamari',
      message: 'May your union bring you infinite blessings, happiness, and peace. Warmest congratulations from all of us!',
      likes: 9,
      date: '3 days ago',
    },
  ]

  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('wedding_wishes_list')
    return saved ? JSON.parse(saved) : initialWishes
  })

  const [newName, setNewName] = useState('')
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    localStorage.setItem('wedding_wishes_list', JSON.stringify(wishes))
  }, [wishes])

  const handleAddWish = (e) => {
    e.preventDefault()
    if (!newName.trim() || !newMessage.trim()) return

    const newEntry = {
      id: Date.now(),
      name: newName.trim(),
      message: newMessage.trim(),
      likes: 1,
      date: 'Just now',
    }

    setWishes([newEntry, ...wishes])
    setNewName('')
    setNewMessage('')
  }

  const handleLike = (id) => {
    setWishes(
      wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    )
  }

  return (
    <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">Guestbook & Blessings</span>
        <h1 className="font-script text-5xl sm:text-7xl gold-text-gradient my-2">Wishes for the Couple</h1>
        <p className="font-serif-royal text-sm sm:text-base text-amber-200/80">
          Leave your heartfelt messages and blessings for Kasun & Shenali
        </p>
      </div>

      {/* Write a Wish Form */}
      <div className="glass-card rounded-3xl p-6 border border-[#d4af37]/40 shadow-xl mb-10">
        <h3 className="font-serif-royal text-xl text-[#ffd700] mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#ffd700]" />
          <span>Write a Blessing</span>
        </h3>
        <form onSubmit={handleAddWish} className="space-y-4">
          <div>
            <input
              type="text"
              required
              placeholder="Your Name / Family Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0f1715]/90 border border-[#d4af37]/30 text-[#f1e9da] placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] text-sm"
            />
          </div>
          <div>
            <textarea
              required
              rows={3}
              placeholder="Share your warm congratulations, advice, or love note..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0f1715]/90 border border-[#d4af37]/30 text-[#f1e9da] placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0d1512] shadow-md hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <Send className="w-4 h-4 fill-current" />
            <span>Post Blessing</span>
          </button>
        </form>
      </div>

      {/* Display Wish Wall Cards */}
      <div className="space-y-4">
        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="glass-card glass-card-hover rounded-2xl p-5 border border-[#d4af37]/30 shadow-lg relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#182823] border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] font-bold text-sm">
                  {wish.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-serif-royal text-base text-[#ffd700] font-semibold">{wish.name}</h4>
                  <span className="text-[10px] text-amber-200/50 font-mono">{wish.date}</span>
                </div>
              </div>

              {/* Like Button */}
              <button
                onClick={() => handleLike(wish.id)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182823] border border-[#d4af37]/30 text-rose-400 hover:text-rose-300 text-xs transition-transform hover:scale-105"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span className="font-mono font-bold text-amber-200">{wish.likes}</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#e2d8c3]/90 mt-3 leading-relaxed italic font-light">
              "{wish.message}"
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Wishes
