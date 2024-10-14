import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/store'

export const useCurrentSurveySelector = () => {
  const pathname = usePathname()
  const surveySlug = pathname.split('/')[2]
  const surveyState = useAppSelector((state) => state.survey.surveyState)

  return surveyState?.[surveySlug]
}
