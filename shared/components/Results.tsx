'use client'

import React from 'react'

import { useAppDispatch, useAppSelector } from '@/store'

import { cleanSurveyState } from '@/store/slices'

import { cn } from '../utils'
import { ResultItem } from './ResultItem'

interface Props {
  className?: string
}

export const Results: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch()
  const answers = useAppSelector((state) => state.survey.surveyState)

  React.useEffect(() => {
    return () => {
      dispatch(cleanSurveyState())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {answers.map((answer) => {
        return <ResultItem key={answer.slug} answer={answer} />
      })}
    </div>
  )
}
