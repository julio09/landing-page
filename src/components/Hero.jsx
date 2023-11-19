import React from 'react'
import {Cask} from '../assets'

function Hero() {
  return (
    <div className='flex justify-between pl-40 items-start pt-[160px]'>
        <div className='absolute right-20 top-96'>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="75" viewBox="0 0 15 75" fill="none">
          <circle cx="7.5" cy="7.5" r="7.5" fill="white"/>
          <circle cx="7.5" cy="37.5" r="7" stroke="white"/>
          <circle cx="7.5" cy="67.5" r="7" stroke="white"/>
        </svg>
        </div>
        <div className='absolute left-[340px] top-[310px] '>
        <svg xmlns="http://www.w3.org/2000/svg" width="1065" height="337" viewBox="0 0 1065 337" fill="none">
          <path d="M77.85 117.45C85.05 105.75 95.4 96.3 108.9 89.1C122.4 81.9 137.85 78.3 155.25 78.3C175.95 78.3 194.7 83.55 211.5 94.05C228.3 104.55 241.5 119.55 251.1 139.05C261 158.55 265.95 181.2 265.95 207C265.95 232.8 261 255.6 251.1 275.4C241.5 294.9 228.3 310.05 211.5 320.85C194.7 331.35 175.95 336.6 155.25 336.6C137.55 336.6 122.1 333.15 108.9 326.25C95.7 319.05 85.35 309.6 77.85 297.9V333H0.900024V0H77.85V117.45ZM187.65 207C187.65 187.8 182.25 172.8 171.45 162C160.95 150.9 147.9 145.35 132.3 145.35C117 145.35 103.95 150.9 93.15 162C82.65 173.1 77.4 188.25 77.4 207.45C77.4 226.65 82.65 241.8 93.15 252.9C103.95 264 117 269.55 132.3 269.55C147.6 269.55 160.65 264 171.45 252.9C182.25 241.5 187.65 226.2 187.65 207Z" fill="#F7E6D3" fill-opacity="0.03"/>
          <path d="M420.62 336.6C396.02 336.6 373.82 331.35 354.02 320.85C334.52 310.35 319.07 295.35 307.67 275.85C296.57 256.35 291.02 233.55 291.02 207.45C291.02 181.65 296.72 159 308.12 139.5C319.52 119.7 335.12 104.55 354.92 94.05C374.72 83.55 396.92 78.3 421.52 78.3C446.12 78.3 468.32 83.55 488.12 94.05C507.92 104.55 523.52 119.7 534.92 139.5C546.32 159 552.02 181.65 552.02 207.45C552.02 233.25 546.17 256.05 534.47 275.85C523.07 295.35 507.32 310.35 487.22 320.85C467.42 331.35 445.22 336.6 420.62 336.6ZM420.62 270C435.32 270 447.77 264.6 457.97 253.8C468.47 243 473.72 227.55 473.72 207.45C473.72 187.35 468.62 171.9 458.42 161.1C448.52 150.3 436.22 144.9 421.52 144.9C406.52 144.9 394.07 150.3 384.17 161.1C374.27 171.6 369.32 187.05 369.32 207.45C369.32 227.55 374.12 243 383.72 253.8C393.62 264.6 405.92 270 420.62 270Z" fill="#F7E6D3" fill-opacity="0.03"/>
          <path d="M789.493 277.2H671.593L652.693 333H572.143L686.443 17.1H775.543L889.843 333H808.393L789.493 277.2ZM769.693 217.8L730.543 102.15L691.843 217.8H769.693Z" fill="#F7E6D3" fill-opacity="0.03"/>
          <path d="M1064.58 267.75V333H1025.43C997.531 333 975.78 326.25 960.18 312.75C944.581 298.95 936.781 276.6 936.781 245.7V145.8H906.18V81.9H936.781V20.7H1013.73V81.9H1064.13V145.8H1013.73V246.6C1013.73 254.1 1015.53 259.5 1019.13 262.8C1022.73 266.1 1028.73 267.75 1037.13 267.75H1064.58Z" fill="#F7E6D3" fill-opacity="0.03"/>
        </svg>
        </div>
        <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-6'>
            <p className='text-beze text-8xl font-semibold'>boAt Rockerz 460</p>
            <span className='uppercase text-5xl text-white'>bluetooth headphones</span> 
        </div>
        <span className='text-redwine text-7xl'>199$</span>
        <div className='flex items-center justify-start space-x-4'>
            <button className='text-white bg-redwine px-[25px] py-[13px] rounded-[24px]'>Add to cart</button>
            <button className='border border-white text-white rounded-[24px] px-[25px] py-[13px] '>More Details</button>
        </div>
        </div>
        <img alt='' src={Cask} className='absolute w-[1063.68px] h-[638px] right-10 top-36 object-contain'/>
    </div>
  )
}

export default Hero