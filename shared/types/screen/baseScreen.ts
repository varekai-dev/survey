import { ScreenType } from './screenType'

export interface IBaseScreen {
  slug: string
  type: ScreenType
  question: string
  lastScreen?: boolean
  dependsOnAnswer?: {
    slug: string
    answers: Array<{
      value: string
      nextQuestionSlug: string
    }>
  }
}
