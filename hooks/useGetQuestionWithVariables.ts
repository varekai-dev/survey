import { IVariable } from '@/shared/types'

import { useAppSelector } from '@/store'

interface IQuestionWithVariables {
  question: string
  variables?: IVariable
  surveySlug: string
}

export const useGetQuestionWithVariables = ({ question, variables, surveySlug }: IQuestionWithVariables) => {
  const surveyState = useAppSelector((state) => state.survey.surveyState)
  const currentSurvey = surveyState?.[surveySlug]
  if (!variables) {
    return question
  }

  const variableValues = Object.entries(variables).reduce((acc: { [key: string]: string }, [variable, value]) => {
    const answerFromState = currentSurvey?.answers.find((answer) => answer.slug === value.questionSlug)?.answer

    const findInsertData = value.answers.find((answer) => answer.answer === answerFromState)

    acc[variable] = findInsertData?.insert || ''
    return acc
  }, {})

  let result = question

  Object.entries(variableValues).forEach(([key, value]) => {
    if (typeof value === 'undefined') {
      return
    }
    result = result.replace(new RegExp(`{${key}}`, 'g'), value)
  })

  return result
}
