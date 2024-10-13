'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { ChevronLeft } from '../assets/icons'
import { cn } from '../utils'

interface Props {
  className?: string
  darkMode: boolean
}

export const BackButton: React.FC<Props> = ({ className, darkMode }) => {
  const router = useRouter()

  const handleClickBack = () => {
    router.back()
  }

  return (
    <button className={className} onClick={handleClickBack}>
      <ChevronLeft
        className={cn({
          'text-white': darkMode,
          'text-foreground': !darkMode,
        })}
      />
    </button>
  )
}
