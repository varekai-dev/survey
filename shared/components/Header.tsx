import React from 'react'

import { LogoDark, LogoLight } from '../assets/icons'
import { BackButton } from './BackButton'

interface Props {
  className?: string
  showBack: boolean
  darkMode: boolean
}

export const Header: React.FC<Props> = ({ className, showBack, darkMode }) => {
  return (
    <div className={className}>
      <header className="flex items-center justify-center">
        <div className="w-1/3">{showBack && <BackButton darkMode={darkMode} />}</div>
        <div className="flex w-1/3 justify-center">{darkMode ? <LogoLight /> : <LogoDark />}</div>
        <div className="w-1/3" />
      </header>
    </div>
  )
}
