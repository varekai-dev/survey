'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { IData, ISurvey } from '../types'
import { Button } from '../ui'
import { cn } from '../utils'

interface Props {
  className?: string
  surveys: IData['surveys']
}

export const SurveyList: React.FC<Props> = ({ className, surveys }) => {
  const router = useRouter()

  const handleClickButton = (survey: ISurvey) => {
    const findFirstScreenSlug = survey.screens.find((screen) => screen.firstScreen)?.slug
    router.push(`/surveys/${survey.slug.trim()}/screens/${findFirstScreenSlug}`)
  }
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {Object.entries(surveys).map(([key, value]) => (
        <Button key={key} onClick={() => handleClickButton(value)}>
          {value.title}
        </Button>
      ))}
    </div>
  )
}
