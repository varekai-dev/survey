'use client'

import React from 'react'

import { useAppSelector } from '@/store'

import { cn } from '../utils'

interface Props {
  className?: string
}

export const Results: React.FC<Props> = ({ className }) => {
  const answers = useAppSelector((state) => state.survey.surveyState)

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {answers.map((answer) => (
        <div className="rounded-md bg-white p-3" key={answer.slug}>
          <p className="font-bold">{answer.question}</p>
          <p>- {answer.answer}</p>
        </div>
      ))}
    </div>
  )
}
