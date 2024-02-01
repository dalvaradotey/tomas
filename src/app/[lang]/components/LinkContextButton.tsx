"use client"

import SettingsContext from '@/context/SettingsContext';
import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { FC, HTMLAttributes, useContext, useEffect } from 'react';

const LinkContextButton = ({ className, children, isButton, page, ...rest }: any) => {
  const context = useContext(SettingsContext);
  const buttonClassRef = 'flex text-white bg-primary hover:bg-indigo-700 font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center transition duration-700 ease-in-out w-full md:w-fit justify-center';
  const classNameStr = !!isButton ? buttonClassRef : ''

  const setURL = () => {
    const lang = !!context?.lang ? context?.lang : 'es'

    return (lang === 'es') ? `/${page}` : `/${lang}/${page}`
  }

  useEffect(() => { console.log('CONTEXTO 2 => ', context); }, [context])

  return (
    <Link
      className={clsx([classNameStr, className])}
      href={setURL()}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default LinkContextButton
