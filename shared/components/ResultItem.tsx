'use client'

import React from 'react'

import { useGetQuestionWithVariables } from '@/hooks'
import { IStateAnswer } from '@/store/slices'

import { cn } from '../utils'

interface Props {
  className?: string
  answer: IStateAnswer
}

export const ResultItem: React.FC<Props> = ({ className, answer }) => {
  const question = useGetQuestionWithVariables(answer.question, answer.variables)
  return (
    <div className={cn('rounded-md bg-white p-3', className)} key={answer.slug}>
      <p className="font-bold">{question}</p>
      <p>- {answer.answer}</p>
    </div>
  )
}
