import { ScreenType } from './screenType'

export interface IBaseScreen {
  slug: string
  type: ScreenType
  question: string
  dependsOnAnswer?: {
    slug: string
    answers: Array<{
      value: string
      nextQuestionSlug: string
    }>
  }
}
