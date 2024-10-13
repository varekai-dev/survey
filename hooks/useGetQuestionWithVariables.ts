import { IVariable } from '@/shared/types'

import { useAppSelector } from '@/store'

export const useGetQuestionWithVariables = (question: string, variables?: IVariable) => {
  const surveyState = useAppSelector((state) => state.survey.surveyState)
  if (!variables) {
    return question
  }

  const variableValues = Object.entries(variables).reduce((acc: { [key: string]: string }, [variable, value]) => {
    const answerFromState = surveyState.find((answer) => answer.slug === value.questionSlug)?.answer

    const findInsertData = value.answers.find((answer) => answer.answer === answerFromState)

    acc[variable] = findInsertData?.insert || ''
    return acc
  }, {})

  let result = question

  Object.entries(variableValues).forEach(([key, value]) => {
    if (!value) {
      return
    }
    result = result.replace(new RegExp(`{${key}}`, 'g'), value)
  })

  return result
}
