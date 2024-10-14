import { usePathname } from 'next/navigation'

import { IInfoScreen } from '@/shared/types'

import { useAppSelector } from '@/store'

export const useGetNextSlug = (data: IInfoScreen['dependsOnAnswer']) => {
  const pathname = usePathname()
  const surveySlug = pathname.split('/')[2]
  const surveyState = useAppSelector((state) => state.survey.surveyState)

  if (!data || !surveyState) {
    return
  }

  const findAnswer = surveyState[surveySlug].answers.find((answer) => answer.slug === data.slug)

  if (!findAnswer) {
    return
  }

  const slug = data.answers.find((answer) => answer.value === findAnswer.answer)?.nextQuestionSlug

  return slug
}
