import Image from 'next/image'
import TomasPaisaje from '../../public/tomas-paisaje.jpg';
import TomasCapillasMarmol from '../../public/tomas-catedrales.jpg';
import TomasFamiliaNieve from '../../public/tomas-familia-nieve.jpg';
import TomasTeleton from '../../public/tomas-teleton.jpg';

export default function VideoGallery(props: any) {
  return (
    <div className={`relative ${props.className}`}>
      <div className="absolute top-24 left-32 md:top-48 md:left-60">
        <button className="relative flex h-20 w-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-20 w-20 bg-cyan-500 opacity-90 hover:opacity-100 transition duration-700 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-4 ml-4">
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" fill="currentColor" strokeWidth="0"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className={`columns-2`}>
        <Image
          src={TomasPaisaje}
          className="w-full aspect-video object-cover mb-4 rounded-xl"
          alt=""
          quality={100}
        />
        <Image
          src={TomasCapillasMarmol}
          className="w-full aspect-square object-cover rounded-xl"
          alt=""
          quality={100}
        />
        <Image
          src={TomasFamiliaNieve}
          className="w-full aspect-square object-cover mb-4 rounded-xl"
          alt=""
          quality={100}
        />
        <Image
          src={TomasTeleton}
          className="w-full aspect-video object-cover rounded-xl"
          alt=""
          quality={100}
        />
      </div>
    </div>
  )
}