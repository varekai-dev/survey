import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/store'

export const useCurrentAnswerSelector = () => {
  const pathname = usePathname()
  const surveySlug = pathname.split('/')[2]
  const screenSlug = pathname.split('/')[4]
  const surveyState = useAppSelector((state) => state.survey.surveyState)
  const findSurvey = surveyState?.[surveySlug].answers.find((answer) => answer.slug === screenSlug)
  return findSurvey?.answer
}
