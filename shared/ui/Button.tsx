import React from 'react'

import { cn } from '../utils'

interface Props {
  className?: string
  active?: boolean
  onClick?: () => void
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({ className, children, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-primary flex w-[330px] items-center justify-center rounded-2xl px-4 py-[22px] shadow-base transition duration-300 active:translate-y-1',
        className,
        {
          'bg-purple-gradient text-white': active,
          'bg-blue': !active,
        },
      )}
    >
      {children}
    </button>
  )
}
