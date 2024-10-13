'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import { useGetQuestionWithVariables } from '@/hooks'
import { IAnswer } from '@/store/slices'

import { cn } from '../utils'

interface Props {
  className?: string
  answer: IAnswer
}

export const ResultItem: React.FC<Props> = ({ className, answer }) => {
  const pathname = usePathname()
  const surveySlug = pathname.split('/')[2]

  const question = useGetQuestionWithVariables({
    question: answer.question,
    variables: answer.variables,
    surveySlug,
  })
  return (
    <div className={cn('w-full rounded-md bg-white p-3', className)} key={answer.slug}>
      <p className="font-bold">{question}</p>
      <p>- {answer.answer}</p>
    </div>
  )
}
