import { bgHero } from "@/public"
import Image from 'next/image'


const Hero = () => {
    return (
      <div className='font-alt italic w-full h-[90vh] flex flex-col items-center justify-end relative'>
        <Image
        src={bgHero}
        alt="Picture of the author"
        className="w-full h-full object-top object-cover absolute mix-blend-overlay"
        />
        <h1 className="text-red-600 text-6xl">Ghreisle Martins Cleaning</h1>
        <p className="text-white mb-48 text-4xl">All Cape excellent References</p>
      </div>
    )
  }
  
  export default Hero