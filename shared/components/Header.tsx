import React from 'react'

import Image from 'next/image'

import { BackButton } from './BackButton'

interface Props {
  className?: string
  showBack: boolean
}

export const Header: React.FC<Props> = ({ className, showBack }) => {
  return (
    <div className={className}>
      <header className="flex items-center justify-center">
        <div className="w-1/3">{showBack && <BackButton />}</div>
        <div className="flex w-1/3 justify-center">
          <Image src="/assets/icons/logo.svg" alt="logo" width={24} height={24} />
        </div>
        <div className="w-1/3" />
      </header>
    </div>
  )
}
