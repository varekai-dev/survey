'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { useAppDispatch } from '@/store'
import { addAnswer, useSelectAnswerBySlug } from '@/store/slices'

import { useGetQuestionWithVariables } from '../../hooks'
import type { IQuestionAnswer, ISingleSelectScreen } from '../types'
import { Button } from '../ui'
import { cn } from '../utils'
import { Layout } from './Layout'

interface Props {
  className?: string
  data: ISingleSelectScreen
}

export const SingleSelectScreen: React.FC<Props> = ({ className, data }) => {
  const dispatch = useAppDispatch()
  const storeAnswer = useSelectAnswerBySlug(data.slug)
  const router = useRouter()
  const question = useGetQuestionWithVariables(data.question, data?.variables)

  const handleClickButton = (answer: IQuestionAnswer) => {
    dispatch(
      addAnswer({
        question: data.question,
        answer: answer.value,
        slug: data.slug,
        ...(data.variables && { variables: data.variables }),
      }),
    )
    let slug
    if (data.lastScreen) {
      slug = '/survey/results'
    } else {
      slug = answer.nextQuestionSlug || data.nextQuestionSlug
    }

    if (slug) {
      setTimeout(() => {
        router.push(slug)
      }, 400)
    }
  }

  return (
    <Layout showBack={!data.firstScreen}>
      <div className={cn('mx-auto max-w-[330px]', className)}>
        <h1 className="mb-[30px]">{question}</h1>
        {data.additionalText && <p className="mb-[30px] text-center text-[18px] font-bold">{data.additionalText}</p>}
        <div className="flex flex-col items-center gap-3">
          {data.answers.map((answer) => (
            <Button
              key={answer.value}
              onClick={() => handleClickButton(answer)}
              active={storeAnswer?.answer === answer.value}
            >
              {answer.value}
            </Button>
          ))}
        </div>
      </div>
    </Layout>
  )
}
