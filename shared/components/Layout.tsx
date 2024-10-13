import React from 'react'

import { cn } from '../utils'
import { Header } from './Header'

interface Props {
  className?: string
  showBack: boolean
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({ className, children, showBack }) => {
  return (
    <div className={cn('container mx-auto px-4 py-5', className)}>
      <Header className="mb-5" showBack={showBack} />
      {children}
    </div>
  )
}
