import { useAppSelector } from '../../'

export const useSelectAnswerBySlug = (slug: string, surveySlug: string) => {
  const surveyState = useAppSelector((state) => state.survey.surveyState)
  const findSurvey = surveyState?.[surveySlug].answers.find((answer) => answer.slug === slug)
  return findSurvey?.answer
}
