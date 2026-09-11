import React from 'react'
import kkcImage from '../images/kkc.png'

function OurStory() {
  const milestones = [
    {
      year: '2019',
      title: 'THE BEGINNING',
      desc: 'Two paths crossed on an ordinary day, and somehow nothing felt ordinary after that.',
    },
    {
      year: '2021',
      title: 'GROWING TOGETHER',
      desc: 'Through seasons of laughter and quiet moments alike, a friendship blossomed into something deeper.',
    },
    {
      year: '2023',
      title: 'THE PROMISE',
      desc: 'Under a sky full of stars, one question changed everything, and the answer was yes.',
    },
    {
      year: '2025',
      title: 'BUILDING A HOME',
      desc: 'Side by side, we turned shared dreams into plans and plans into a life we cherish.',
    },
    {
      year: '2026',
      title: 'FOREVER BEGINS',
      desc: 'Now, surrounded by the people we love, we are ready for our most beautiful chapter yet: Becoming husband and wife.',
    },
  ]

  return (
    <div className="pt-20 pb-28 px-5 sm:px-8 max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Top Story Block: Couple Art on Left, Story on Right */}
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 my-4">
        
        {/* Couple Illustration */}
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
            Saturday, 12<sup>th</sup> December 2026
          </p>

          <p className="text-[11px] sm:text-xs text-[#78704F] leading-relaxed">
            <strong className="text-[#3F3B29] font-bold">Together with their families</strong> request the honour of your presence at the celebration of their marriage.
          </p>
        </div>
      </div>

      {/* Venue Section with Horizontal Divider Lines */}
      <div className="w-full my-8">
        <div className="w-full border-t border-[#D3BD86]/50" />
        
        <div className="py-5 text-center">
          <h3 className="font-playfair font-bold text-sm sm:text-base text-[#3E2A1E] tracking-[0.35em] uppercase">
            ARALIYA GRAND
          </h3>
          <p className="text-[10px] sm:text-xs text-[#78704F] tracking-[0.3em] uppercase mt-1">
            NUWARA ELIYA, SRI LANKA
          </p>
        </div>

        <div className="w-full border-t border-[#D3BD86]/50" />
      </div>

      {/* Journey Together Timeline Section */}
      <div className="w-full my-4">
        <div className="text-center mb-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8C7134] font-semibold">
            A JOURNEY TOGETHER
          </span>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 max-w-xl mx-auto">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="flex items-start">
              {/* Year */}
              <div className="w-16 sm:w-20 shrink-0 text-right pr-3 pt-0.5">
                <span className="font-couple-name text-2xl sm:text-3xl italic text-[#2F5A45] font-bold block leading-none">
                  {milestone.year}
                </span>
              </div>

              {/* Vertical Gold Line */}
              <div className="w-[1.5px] bg-[#D3BD86]/70 self-stretch mx-1.5 shrink-0" />

              {/* Title & Description */}
              <div className="flex-1 pl-3 text-left">
                <h4 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#3E2A1E] uppercase mb-1">
                  {milestone.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#78704F] leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default OurStory
