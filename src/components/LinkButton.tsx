import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLAnchorElement> & {
  href: string
}

const LinkButton: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <a className={clsx(['flex text-white bg-primary hover:bg-indigo-700 font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center transition duration-700 ease-in-out w-full md:w-fit justify-center', className])} {...rest}>
      {children}
    </a>
  )
}

export default LinkButton
