'use client'

import React from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { useAppDispatch } from '@/store'
import { removeLastAnswer } from '@/store/slices'

import { ChevronLeft } from '../assets/icons'
import { cn } from '../utils'

interface Props {
  className?: string
  darkMode: boolean
  removeAnswerOnBack: boolean
}

export const BackButton: React.FC<Props> = ({ className, darkMode, removeAnswerOnBack }) => {
  const router = useRouter()
  const pathname = usePathname()
  const surveySlug = pathname.split('/')[2]
  const dispatch = useAppDispatch()

  const handleClickBack = () => {
    if (!removeAnswerOnBack) {
      dispatch(removeLastAnswer(surveySlug))
    }
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
