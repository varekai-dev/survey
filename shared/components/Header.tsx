import React from 'react'

import Image from 'next/image'

import { BackButton } from './BackButton'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <header className="flex items-center justify-center">
        <BackButton className="w-1/3" />
        <div className="flex w-1/3 justify-center">
          <Image src="assets/icons/logo.svg" alt="logo" width={24} height={24} />
        </div>
        <div className="w-1/3" />
      </header>
    </div>
  )
}
