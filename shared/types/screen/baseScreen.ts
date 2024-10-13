import { ScreenType } from './screenType'

export interface BaseScreen {
  id: number
  slug: string
  type: ScreenType
  question: string
  dependsOnAnswer?: {
    id: number
    answers: Array<{
      value: string
      nextQuestionId?: number
    }>
  }
}
