'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { useAppDispatch, useAppSelector } from '@/store'
import { cleanSurveyState } from '@/store/slices'

import { Button } from '../ui'
import { cn } from '../utils'
import { Layout } from './Layout'
import { ResultItem } from './ResultItem'

interface Props {
  className?: string
}

export const Results: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const answers = useAppSelector((state) => state.survey.surveyState)

  const goHome = () => {
    router.push('/')
  }

  if (answers.length === 0) {
    goHome()
  }
  const handleClear = () => {
    dispatch(cleanSurveyState())
    goHome()
  }

  return (
    <Layout>
      <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
        {answers.map((answer) => {
          return <ResultItem key={answer.slug} answer={answer} />
        })}
        <Button onClick={handleClear}>Reset</Button>
      </div>
    </Layout>
  )
}
