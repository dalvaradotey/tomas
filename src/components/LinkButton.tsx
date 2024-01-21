import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { FC, HTMLAttributes } from 'react';

const LinkButton = ({ className, children, ...rest }: any) => {
  return (
    <Link className={clsx(['flex text-white bg-primary hover:bg-indigo-700 font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center transition duration-700 ease-in-out w-full md:w-fit justify-center', className])} {...rest}>
      {children}
    </Link>
  )
}

export default LinkButton
