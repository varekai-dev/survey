import { IInfoScreen } from '@/shared/types'

import { useAppSelector } from '@/store'

export const useGetNextSlug = (data: IInfoScreen['dependsOnAnswer']) => {
  const surveyState = useAppSelector((state) => state.survey.surveyState)

  if (!data) {
    return
  }

  const findAnswer = surveyState.find((answer) => answer.slug === data.slug)

  if (!findAnswer) {
    return
  }

  const slug = data.answers.find((answer) => answer.value === findAnswer.answer)?.nextQuestionSlug

  return slug
}
