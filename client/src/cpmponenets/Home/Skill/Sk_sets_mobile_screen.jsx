import React from 'react'

export default function Sk_sets_mobile_screen({offsetX}) {
  return (
    <div className='bg-green-200'>
      {/* frontend */}
      <div
            className="--16 bg-shades-6 px-5 py-1  rounded-2xl z-"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 700 * 0.7,
                100
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-lg font-semibold">Front-End </p>
          </div>
    </div>
  )
}
