import { ScreenType } from './screenType'

export interface IBaseScreen {
  slug: string
  firstScreen?: boolean
  type: ScreenType
  lastScreen?: boolean
  dependsOnAnswer?: {
    slug: string
    answers: Array<{
      value: string
      nextQuestionSlug: string
    }>
  }
}
