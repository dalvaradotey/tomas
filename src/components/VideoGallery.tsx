import clsx from 'clsx';
import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import TomasCapillasMarmol from '../../public/tomas-catedrales.jpg';
import TomasFamiliaNieve from '../../public/tomas-familia-nieve.jpg';
import TomasPaisaje from '../../public/tomas-paisaje.jpg';
import TomasTeleton from '../../public/tomas-teleton.jpg';
import LinkButton from './LinkButton';

type Props = HTMLAttributes<HTMLDivElement> & {
	onOpenVideo: () => void;
}

const VideoGallery: FC<Props> = ({ onOpenVideo, className, ...rest }) => {
  return (
    <div className={clsx(['relative h-full md:h-screen', className])} {...rest}>
      <Image
        src={TomasPaisaje}
        className="h-4/6 md:h-3/4 aspect-video object-cover rounded-[50px] z-0"
        alt=""
        quality={100}
      />
      <div className="md:hidden absolute w-full">
        <LinkButton href="" className="flex items-center absolute bottom-4">
          <svg className="mt-[4px] w-6 h-6 text-secondary animate-[animate-bounce-right_1s_ease-in-out_infinite]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
          </svg>
          <span className="ml-2">Conoce mi testimonio</span>
        </LinkButton>
      </div>
    </div>
  )
}

export default VideoGallery