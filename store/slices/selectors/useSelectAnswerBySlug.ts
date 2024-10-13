import { useAppSelector } from '../../'

export const useSelectAnswerBySlug = (slug: string) => {
  const surveyState = useAppSelector((state) => state.survey.surveyState)

  const answer = surveyState?.find((answer) => answer.slug === slug)
  return answer
}
